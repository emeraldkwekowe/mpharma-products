const Image = props => {
    let {alt, src} = props;
    return(
        alt === undefined || alt === "" ?
        <p data-testid="alt_enforcement_p">Image ignored, no valid alt text provided</p>
        :
        <img data-testid="img" className={props.className} onClick={props.onClick} src={require(`../../assets/img/${src}`).default} alt={alt}/>
    )
}

export default Image;
