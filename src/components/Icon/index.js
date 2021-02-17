export default function Icon(props){
    const { name } = props
    if (!name) throw new Error("This component requires an icon");
    return <i className={`bi-${name}`} />
}