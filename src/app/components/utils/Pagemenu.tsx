
type PagemenuProps = {
    title: string | number
}
export default function Pagemenu ({title}: PagemenuProps) {
    return (
        <div>
            <div className="p-8">
                <h3 className="text-center text-2xl text-black">{title}</h3>
            </div>
        </div>
    )
}