import Image from "next/image"
export default function Blog(){
    return(
        <div>
             <div className="wrapperboxshop">
                <div className="container">
                    <div className="pageHeadTitle">
                        <Image className="m-auto" src="/img/furniro-icon.png" width={77} height={77} alt="" />
                        <h1>Blog</h1><p>Home <i className="fa-solid fa-angle-right"></i> Blog</p>
                    </div>
                </div>
            </div>
        </div>
    )
}