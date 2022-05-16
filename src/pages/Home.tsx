import { useEffect, useState } from 'react';
import { Header } from '../components/Header/Index';
import '../styles/home.scss';

import allImg from '../assets/meat.png'
import pizzaImg from '../assets/pizza.jpg'
import burgerImg from '../assets/burger.png'
import japaneseImg from '../assets/sushi.png'
import healthyImg from '../assets/broccoli.png'
import dessertsImg from '../assets/cake.png'
import banner1Img from '../assets/dealBanner.svg'
import banner2Img from '../assets/dealBanner2.svg'
import { api } from '../services/api';

const foodOption = {
  ALL: {
    title: 'All',
    image: {
      source: allImg,
      alt: 'All image'
    },
  },
  PIZZA: {
    title: 'Pizza',
    image: {
      source: pizzaImg,
      alt: 'pizza image'
    },
  },
  BURGER: {
    title: 'Burger',
    image: {
      source: burgerImg,
      alt: 'burger image'
    },
  },
  JAPANESE: {
    title: 'Japanese',
    image: {
      source: japaneseImg,
      alt: 'japanese image'
    },
  },
  HEALTHY: {
    title: 'Healthy',
    image: {
      source: healthyImg,
      alt: 'healthy image'
    },
  },
  DESSERTS: {
    title: 'Desserts',
    image: {
      source: dessertsImg,
      alt: 'desserts image'
    },
  }
}

type foodOptionType = keyof typeof foodOption

type foodsTypes = {
  id: number,
  name: string,
  type: string,
  description: string,
  price: string,
  available: boolean,
  image: string
}

export function Home() {
  const [option, setOption] = useState<foodOptionType>('ALL');
  const [foods, setFoods] = useState([] as foodsTypes[]);
 
  useEffect(() => {
    async function getFoods() {
      const response = await api.get(`foods?type=${option.toLowerCase()}`)
      
      console.log(response.data)
      setFoods(response.data)
    }
    getFoods()
  }, [option])

  return (
    <>
      <Header />
      <div className='Home'>
          <div className="Banners">
            <div className='Banner-image'> 
              <img src={banner1Img} alt="Banner" />
            </div>
            <div className='Banner-image'>
              <img src={banner2Img} alt="Banner" />
            </div>
          </div>

          <div className="Food-categories">
            { Object.entries(foodOption).map(([key, data]) => {
                return option === key ? (
                  <button key={key} className="Food-type selected" onClick={() => setOption(key as foodOptionType)}>
                    <img src={data.image.source} alt={data.image.alt} />
                    <h2>{data.title}</h2>
                  </button>
                ) : (
                  <button key={key} className="Food-type" onClick={() => setOption(key as foodOptionType)}>
                    <img src={data.image.source} alt={data.image.alt} />
                    <h2>{data.title}</h2>
                  </button>
                )
            })}
          </div>

          <div className="Food-options">
            <h1>Restaurants</h1>
            { foods.map((food) => {
              return (
                <button key={food.id} className="Food">
                  <div className='Food-infos'>
                    <div className='Food-image'></div>
                    <div>
                      <h2>{food.name}</h2>
                      <h3>{food.description}</h3>
                    </div>
                  </div> 
                  <div className='Food-price'>
                    <h2>R${food.price}</h2>
                  </div>
                </button>
              )
            })}
          </div>
      </div>
    </>
  )
}