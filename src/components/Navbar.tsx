import Image from "next/image"

const Navbar = () => {
  return (
    <div className='flex items-center justify-between'>

{/* searchbar */}

<div className="hidden md:flex">
    <Image src='/search.png' alt=""  width={14} height={14}/>
    <input type="text" name="" id="" placeholder="search..." />
</div>

{/* icons and user */}

<div className="">
    <div className=""></div>
</div>

    </div>
  )
}

export default Navbar