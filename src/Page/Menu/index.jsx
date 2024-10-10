import { useState } from "react"

const Menu = () => {
    const [sidebar, setSidebar] = useState(false)

    const handleSidebar = () => {
        setSidebar(!sidebar)
    }
    return(
        <>
            <div className=" flex">
                {
                    sidebar && (

                <div className="bg-[#F2EAE1] p-2 w-[30%]">
                    <div>
                        <h1 className="text-[10px]">UBAY OPERATIONS</h1>
                    </div>
                </div>
                    )
                }
                <button onClick={handleSidebar}>test</button>

                <div>

                </div>
            </div>
        </>
    )
}

export default Menu