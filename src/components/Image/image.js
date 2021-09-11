const Image = props => {
    let {alt, src} = props;
    return(
        <img className={props.className} onClick={props.onClick} src={require(`../../assets/img/${src}`).default} alt={alt}/>
    )
}

export default Image;
