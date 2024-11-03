import UserCard from "@/components/UserCard"

const AdminPage = () => {
  return (
    <div className='p-4  flex gap-4 flex-col md:flex-row'>
      {/* left */}

      <div className="w-full lg:w-2/3">
      
      {/* user cards */}

      <div className="flex gap-4 justify-between ">

        <UserCard type="student" />

        <UserCard type="teacher" />

        <UserCard type="parent" />

        <UserCard type="staff" />


      </div>
      
      
      {/* middle chats  */}
      
      <div className="flex gap-4 flex-col lg:flex-row"> 
        
        {/* count chats */}
        <div className="w-full lg:w-1/3"></div>
        {/* attendence chats */}
        <div className=""></div>
      </div>

      {/* bottom charts */}
      <div className=""></div>
       
      </div>

      {/* right  */}
      <div className="w-full lg:w-1/3">r</div>



      </div>
  )
}

export default AdminPage