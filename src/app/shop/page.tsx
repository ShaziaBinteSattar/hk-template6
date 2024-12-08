import Image from "next/image"
import Product from "../product"
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"

export default function Shop(){
    return(
        <div className="wrappershop">
            <div className="wrapperboxshop">
                <div className="container">
                    <div className="pageHeadTitle"><Image className="m-auto" src="/img/furniro-icon.png" width={77} height={77} alt="" /><h1>Shop</h1><p>Home <i className="fa-solid fa-angle-right"></i> Shop</p></div>
                </div>
            </div>
            <div className="productsListsort">
                <div className="container">
                    <div className="productsSortSection">
                        <div className="sortboxleft">
                            <span className="iconsvericon"><Image src="/img/uicons-filtering.png" alt="" width={25} height={25} />Filter <Image src="/img/grid-big-round.png" width={28} height={28} alt="" /> <Image src="/img/view-list.png" alt="" height={24} width={24}></Image></span>
                            <span className="sorttxtsep"> | </span>
                            <span className="sortshowingcount">Showing 1–16 of 32 results</span>
                        </div>
                    <div className="sortboxright">
                    <div className="">Show <input className="inputnumshow" type="text" placeholder="16" /></div>
                    <div className="">Short by <input type="text" placeholder="Default" /></div>
                    </div>
                </div>
                </div>
            </div>
            <div className="showProList mt-5 pt-5">
                <Product />
                <Product /> 
                <div className="paginationbox">
                <Pagination>
                <PaginationContent>
                    <PaginationItem>
                    <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                    <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                    <PaginationNext href="#" />
                    </PaginationItem>
                </PaginationContent>
                </Pagination>
                </div>
            </div>
        </div>
    )
}