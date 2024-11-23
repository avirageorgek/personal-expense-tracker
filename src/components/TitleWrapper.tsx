
interface TitleWrapperProps  {
    children: React.ReactNode,
    title: string
}

const TitleWrapper: React.FC<TitleWrapperProps> = ({children, title}) => {
    return (
        <>
            <div className="grid grid-cols-12">
                <div className="col-span-1">
                </div>
                <div className="col-span-10 m-4">
                    <p className="text-2xl font-medium">{title}</p>
                </div>
                <div className="col-span-1">
                </div>
            </div>
            <div className="grid grid-cols-12">
                <div className="col-span-1">
                </div>
                <div className="col-span-10">
                    {children}
                </div>         
                <div className="col-span-1">
                </div> 
            </div>
        </>
    );
}

export default TitleWrapper;