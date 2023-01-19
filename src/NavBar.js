const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Logo Quiz</h1>
            <div className="links">
                <a href="/"> Home</a>
                <a href="/create" style={{ 
                    color: "white",
                    backgroundColor: '#35d8f1c1',
                    borderRadius: '8px'
                 }}> Github</a>
            </div>
        </nav>
     );
}
 
export default Navbar;