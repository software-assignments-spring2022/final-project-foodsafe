const recommended_pictures = ({name, image}) => {
    return (
        <figure>
        <img src={image} alt={name} />
        <figcaption>{name}</figcaption>
        </figure>

    )
}
export default change_allergy_button;
