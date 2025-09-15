import './header.css'

function Header() {
    return (
        <header>
            <section className='header-bar'>
                <div className='header-bar-one'>
                    Logo
                </div>

                <div className='header-bar-two'>
                    <a className='link' href="/">Home</a>
                    <a className='link' href="/about">About</a>
                    <a className='link' href="/contact">ContactUs</a>
                    <a className='link' href="/product">Products</a>
                </div>
            </section>
        </header>
    )
}

export default Header;