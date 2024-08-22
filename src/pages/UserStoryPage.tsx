
import { useDispatch } from "react-redux";
import Footer from "../component/molecules/Footer"
import Navbar from "../component/molecules/Navbar"
import UserStoryCard from "../component/molecules/usercard/UserStoryCard"
import { HrmDispatch, useAppSelector } from "../store";
import { useEffect } from "react";
import { fetchCommentList } from "../store/feature/commentSlice";

function UserStoryPage() {

    const commentList = useAppSelector(state => state.comment.commentList);
    const dispatch = useDispatch<HrmDispatch>();

    useEffect(() => {
        dispatch(fetchCommentList());

    }, [])


    if (commentList === null) {
        return <p>Loading...</p>; 
      }
    
      if (commentList.length === 0) {
        return <p>No comments available.</p>;
      }



    return (
        <>

            <Navbar />
            <div className="background" style={{
                backgroundImage: 'url("https://st2.depositphotos.com/2124221/46809/i/450/depositphotos_468095768-stock-photo-abstract-multicolored-background-poly-pattern.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100%'
            }} >

                <div className="container">

                    <div className="row">
                        <div className="col-12  text-black py-3">
                            <h2>KULLANICI HİKAYELERİ</h2>
                            <p>1000'lerce insan kaynakları profesyoneli ile beraber İK'yı kolaylaştırıyoruz.</p>
                            
                        </div>
                    </div>
                   


                    <div className="row py-5 ">
                        <div className="container">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {commentList .map((comment) => (
                         
                         <UserStoryCard comment={comment} />
                        
                        ))}
                          
                          </div>
                        </div>
                    </div>
                </div>


            </div>


            <div className="container col-xxl-8 px-4 py-5">
                    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                        <Footer/>
                    </div>
                </div>




        </>

    )
}

export default UserStoryPage