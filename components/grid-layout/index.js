import styles from "./styles.module.scss";
import cn from 'classnames'
import Image from "next/image";

export const GridLayout = ({children, className}) => {
    return (
        <section className={cn(styles.gridLayout,className)} >
            {children}
        </section>
    )
}
const renderImage = (image, imageAlt, imageBG) => {
    if(!image) 
        return <div className={styles.placeholder} style={{backgroundColor: imageBG}}></div>;
    return (
        <>
        <Image  src={image} alt={imageAlt} layout="fill"/>
        {imageBG ? <div className={styles.imageOverlay} style={{backgroundColor: imageBG}}/> : null}
        </>
    )


    

}
export const Article = ({image, imageAlt, imageBG, children, className, }) => {
    
    return (
        <article className={cn(styles.article,className)}>
            <div className={styles.imageContainer}>
                {renderImage(image, imageAlt, imageBG)}
            </div>
            
            <div className={styles.content}>
                {children}
            </div>
        </article>
    )

}