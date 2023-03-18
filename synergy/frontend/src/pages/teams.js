import Sidebar from '../components/sidebar'
import Buttons from '../components/buttons'

const Teams = () => {

    let arr = ['a', 'b', 'c'];

    return (
        <>

            <div className="flex bg-gray-900 items-center justify-center">
                <div>
                    <Sidebar />
                </div>

                <div className="w-full h-full p-4 m-8 overflow-y-auto ">
                    <div className="flex items-center justify-center p-8  ">
                       
                        <div className="flex flex-col w-full">
                            <Buttons />
                            <Buttons />
                            <Buttons />
                            <Buttons />
                            <Buttons />
                            <Buttons />
                        </div>
                      

                    </div>
                </div>

            </div>
        </>
    )
}

export default Teams