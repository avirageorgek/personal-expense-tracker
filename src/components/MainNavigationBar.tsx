type MainNavigationBarProps = {
    menuItems: {
        key: number,
        name: string,
        path: string
    }[]
}

const MainNavigationBar = ({
    menuItems
}: MainNavigationBarProps) => {
    return (
        <nav className="bg-white dark:bg-gray-900 w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        {
                            menuItems.map((menu) => {
                                return (
                                    <li>
                                        <a key={menu.key} href={menu.path} className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">{menu.name}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default MainNavigationBar