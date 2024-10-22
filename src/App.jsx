
import './App.css'
import Container from './components/Container'
import Flex from './components/Flex'
import Image from './components/Image'
import Logo from './assets/logo.png'
import Menu from './components/Menu'
import Button from './components/Button'
import BannerImage from './assets/bannerImg.png'
import collectionImage from './assets/c1.png'
import collectionImage2 from './assets/c2.png'
import collectionImage3 from './assets/c3.png'
import fashionImage from './assets/fashion.png'
import Heading from './components/Heading'
import oneImage from './assets/img1.png'
import twoImage from './assets/img2.png'
import shop1 from './assets/shop1.png'
import shop2 from './assets/shop2.png'
import { IoIosStar } from "react-icons/io";



function App() {

  return (
    <>
      {/* Menu Part Start */}
      <div className="bg-allBg py-5">
        <Container>
          <Flex className={"justify-between items-center"}>
            <div className="w-[15%]">
              <Image imgSrc={Logo} imgAlt={"Image"} />
            </div>
            <div className="w-[65%]">
              <Flex className={"justify-center"}>
                <Menu menuTxt={"men"} />
                <Menu menuTxt={"woman"} />
                <Menu menuTxt={"kids"} />
                <Menu menuTxt={"collection"} />
                <Menu menuTxt={"trends"} />
              </Flex>
            </div>
            <div className="w-[20%]">
              <Flex>
                <Button btnName={"log in"} className={"py-2 px-4 rounded-lg border border-btnColor shadow shadow-gray-400 transition ease-in duration-500 hover:bg-btnColor"} />
                <Button btnName={"sign up"} className={"py-2 px-4 rounded-lg border border-btnColor shadow shadow-gray-400 transition ease-in duration-500 hover:bg-btnColor ml-4"} />
              </Flex>
            </div>
          </Flex>
        </Container>
      </div>
      {/* Menu Part End */}

      {/* Banner Part Start */}
      <div className="bg-allBg py-24 rounded-b-3xl">
        <Container>
          <Flex className={"justify-center"}>
            <div className="w-1/2 ml-7">
              <Heading as={"h1"} className={"font-pop font-semibold text-[64px] w-8/12 "} text={"Find The Best Fashion Style For You"} />
              <Heading as={"p"} className={"font-pop font-normal text-[22px] w-10/12 mt-4"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra. "} />
              <Button btnName={"SHOP NOW"} className={"py-4 px-12 mt-16 text-white bg-black rounded-lg transition ease-in duration-500 hover:bg-btnColor hover:text-black"} />
            </div>
            <div className="w-1/2 relative">
              <Image imgSrc={BannerImage} imgAlt={"Image"} className={"mx-auto z-10 relative"} />
              <Image imgSrc={oneImage} imgAlt={"Image"} className={"absolute -bottom-10 -left-12 z-0"} />
            </div>
          </Flex>
        </Container>
      </div>
      {/* Banner Part End */}

      {/* Collection Part Start */}
      <div className="py-28 text-center">
        <Container>
          <Heading as={"h1"} className={"font-frank font-bold text-[64px] mb-16"} text={"New Collection"} />
          <Flex className={"justify-center"}>
            <div className="w-1/3 mx-10 relative">
              <Image imgSrc={collectionImage} imgAlt={"Image"} className={"w-full h-[402px]"} />
              <Button btnName={"Sweater"} className={"py-3 px-12 text-black bg-white absolute bottom-10 left-5 right-5 font-pop text-2xl rounded-lg transition ease-in duration-500 hover:bg-btnColor"} />
            </div>
            <div className="w-1/3 mx-10 relative">
              <Image imgSrc={collectionImage2} imgAlt={"Image"} className={"w-full h-[402px]"} />
              <Button btnName={"Jeans"} className={"py-3 px-12 text-black bg-white absolute bottom-10 left-5 right-5 font-pop text-2xl rounded-lg transition ease-in duration-500 hover:bg-btnColor"} />
            </div>
            <div className="w-1/3 mx-10 relative">
              <Image imgSrc={collectionImage3} imgAlt={"Image"} className={"w-full h-[402px]"} />
              <Button btnName={"Baskets"} className={"py-3 px-12 text-black bg-white absolute bottom-10 left-5 right-5 font-pop text-2xl rounded-lg transition ease-in duration-500 hover:bg-btnColor"} />
            </div>

          </Flex>
        </Container>
      </div>
      {/* Collection Part End */}

      {/* Fashion Part Start */}
      <div className="py-28">
        <Container>
          <Flex className={"justify-center"}>
            <div className="w-1/2 relative">
              <Image imgSrc={fashionImage} imgAlt={"Image"} className={"w-full"} />
              <Image imgSrc={twoImage} imgAlt={"Image"} className={" absolute -top-28 -right-24 -z-10"} />
            </div>
            <div className="w-1/2 mt-16">
              <Heading as={"h1"} className={"font-frank font-bold text-[64px] w-8/12 ml-40"} text={"Best Fashion Since 2010"} />
              <Heading as={"p"} className={"font-pop font-semibold text-2xl w-8/12 mt-5 ml-40"}
                text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra. "} />

              <div className="w-[795px] bg-counterBg py-16 mt-48 relative -left-20 rounded-xl -z-10">
                <Flex className={"text-center"}>
                  <div className="w-1/3 pl-8 border-r-2 border-black">
                    <Heading as={"h3"} className={"font-podkova font-bold text-[64px]"} text={"2010"} />
                    <Heading as={"h5"} className={"font-pop font-medium text-[28px]"} text={"Founded"} />
                  </div>
                  <div className="w-1/3 border-r-2 border-black px-10">
                    <Heading as={"h3"} className={"font-podkova font-bold text-[64px]"} text={"5000+"} />
                    <Heading as={"h5"} className={"font-pop font-medium text-[28px]"} text={"Product Sold"} />
                  </div>
                  <div className="w-1/3 px-10">
                    <Heading as={"h3"} className={"font-podkova font-bold text-[64px]"} text={"4500+"} />
                    <Heading as={"h5"} className={"font-pop font-medium text-[28px]"} text={"Best Reviews"} />
                  </div>
                </Flex>
              </div>
            </div>

          </Flex>
        </Container>
      </div>
      {/* Fashion Part End */}

      {/* Shop Part Start */}
      <div className="py-28 bg-shopBg relative">
        <Container>
          <Flex className={"justify-center"}>
            <div className="w-1/3">
              <Heading as={"h1"} className={"font-frank font-bold text-[64px] leading-tight text-white"} text={"Best Seller Product"} />
              <Heading as={"p"} className={"font-frank font-bold text-2xl mt-8 text-white"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque, velit tortor quam at donec etiam bibendum sagittis. Libero tempor, lacus amet, scelerisque neque mauris odio risus nec. Nisl, parturient at morbi morbi sit arcu. At integer maecenas tortor non lectus."} />
              <Button btnName={"learn more"} className={"py-5 px-16 mt-20 text-white bg-black rounded-lg transition ease-in duration-500 hover:bg-btnColor hover:text-black"} />
            </div>
            <div className="w-1/3 mx-3">
              <Image imgSrc={shop1} imgAlt={"Image"} className={"w-full"} />
              <div className="bg-white px-4 py-3">
                <Flex>
                  <IoIosStar className={"text-star pr-2 text-3xl"}/>
                  <IoIosStar className={"text-star pr-2 text-3xl"}/>
                  <IoIosStar className={"text-star pr-2 text-3xl"}/>
                  <IoIosStar className={"text-star pr-2 text-3xl"}/>
                  <IoIosStar className={"text-star pr-2 text-3xl"}/>
                </Flex>
                <Heading as={"h3"} className={"font-pop font-semibold text-[22px] py-1"} text={"Sweater Shirt"} />
                <Flex>
                  <Heading as={"p"} className={"font-pop font-regular text-2xl text-gray-300"} text={"$45.99"} />
                  <Heading as={"p"} className={"font-pop font-regular text-2xl ml-10"} text={"$35.99"} />
                </Flex>
              </div>
            </div>
            <div className="w-1/3 mx-3">
              <Image imgSrc={shop2} imgAlt={"Image"} className={"w-full"} />
              <div className="bg-white px-4 py-3">
                <Flex>
                  <IoIosStar className={"text-star pr-2 text-3xl"}/>
                  <IoIosStar className={"text-star pr-2 text-3xl"}/>
                  <IoIosStar className={"text-star pr-2 text-3xl"}/>
                  <IoIosStar className={"text-star pr-2 text-3xl"}/>
                  <IoIosStar className={"text-star pr-2 text-3xl"}/>
                </Flex>
                <Heading as={"h3"} className={"font-pop font-semibold text-[22px] py-1"} text={"Pants fashion"} />
                <Flex>
                  <Heading as={"p"} className={"font-pop font-regular text-2xl text-gray-300"} text={"$55"} />
                  <Heading as={"p"} className={"font-pop font-regular text-2xl ml-10"} text={"$44.99"} />
                </Flex>
              </div>
            </div>
          </Flex>

          <Image imgSrc={twoImage} imgAlt={"Image"} className={" absolute -top-36 left-96 -z-10"} />
        </Container>
      </div>
      {/* Shop Part End */}
    </>
  )
}

export default App
