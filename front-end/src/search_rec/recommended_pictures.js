const Recommended_pictures = ({name, image}) => {
    return (
        <figure>
        <img src={image} alt={name} width='500' height='500' />
        <figcaption>{name}</figcaption>
        </figure>

    )
}
export default Recommended_pictures;
