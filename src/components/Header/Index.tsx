import './style.scss';
import bagImg from "../../assets/shoppingbag.png"

export function Header() {
  return (
    <div className="Header">
      <div className='Header-Area'>
        <div className='Header-Left-Side'>
          <h2>Deliveries</h2>
          <input name="" id="" placeholder='Search'></input>
        </div>
        <div className='Header-Right-Side'>
            <button>Restaurants</button>
            <button>Deals</button>
            <div className='Separator' />
            <button className='Orders'>
              <h2>
                My orders
              </h2>
              <div>
                <img src={bagImg} alt="Bag" />
              </div>
            </button>
            <button>
              <img src="" alt="Profile" />
            </button>
        </div>
      </div>
    </div>
  )
}