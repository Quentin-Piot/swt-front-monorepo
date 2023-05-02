export default function LandingPage() {
  return (
      <div className="h-screen bg-right bg-cover bg-[url('https://cdn.wallpapersafari.com/9/52/PzxWaG.jpg')]">
          <div className="w-full container mx-auto p-6">

          </div>

          <div className="container pt-12 md:pt-12 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">

              <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden pt-16">
                  <div className="backdrop-blur-sm bg-white/5 p-6 mb-2 rounded-md"><h1
                      className="my-4 text-3xl md:text-5xl text-gray-50 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">Social
                      World Tour</h1>
                      <p className="leading-normal text-gray-200  md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle">An
                          application to follow QQ && JuJu and all their adventures across the world</p>
                  </div>

                  <p className="text-blue-400 font-bold pb-8 lg:pb-6 text-center md:text-left fade-in">Download our
                      app:</p>
                  <div className="flex w-full justify-center md:justify-start pb-24 lg:pb-0 fade-in">
                      <img src="https://logos-world.net/wp-content/uploads/2021/03/App-Store-Logo-2020.png"
                           className="h-12 pr-4 bounce-top-icons"/>
                      <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Google_Play_Arrow_logo.svg/1200px-Google_Play_Arrow_logo.svg.png"
                          className="h-12 bounce-top-icons"/>
                  </div>

              </div>

              <div className="w-full xl:w-3/5 py-6 overflow-y-hidden pr-6">
                  <img className="w-3/6 mx-auto lg:mr-0 slide-in-bottom drop-shadow-lg"
                       src="https://b1278086.smushcdn.com/1278086/wp-content/uploads/2022/09/app-landing-page-22-3-12320-1.png?lossy=1&strip=1&webp=1s"/>
              </div>

              <div className="w-full  pb-6 text-sm text-center md:text-left fade-in">
                  <a className="text-gray-200 no-underline hover:no-underline" href="#">&copy; Social World Tour
                      2023</a>
              </div>

          </div>


      </div>
  );
}
