const Image = props => {
    let {alt, src} = props;
    return(
        <img src={require(`../../assets/img/${src}`).default} alt={alt}/>
    )
}

export default Image;
