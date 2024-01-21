import '@styles/globals.css';


export const metadata={
    title:"Ehtisham",
    description:"My website",
};

const Rootlayout = ({children}) => {
  return (
    <html lang='en'>
      <body>
            <div>
            </div>
            <main className='app'>
              <nav className='nav_bar font-bold text-3xl  p-3'>
                <div className='ml-24'>My Website</div></nav>
              {children}
            </main>

      </body>

    </html>
  )
}

export default Rootlayout;