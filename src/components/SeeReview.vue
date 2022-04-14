<template>
 
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <section id="testimonials">
        <!--heading--->
        <div class="testimonial-heading">
            <span>Reviews</span>
            <h5>Most Recent</h5>
        </div>
        <!--testimonials-box-container------>
        <div class="testimonial-box-container">
            <!--BOX-1-------------->
            <div class="testimonial-box">
                <!--top------------------------->
                <div class="box-top">
                    <!--profile----->
                    <div class="profile">
                        <!--img---->
                        <div class="profile-img">
                            <img src="images/c-1.jpg" />
                        </div>
                        <!--name-and-username-->
                        <div class="name-user">
                            <strong>Grace Tan</strong>
                            <span>@GraceTan</span>
                        </div>
                    </div>
                    <!--reviews------>
                    <div class="reviews">
                        &starf;
                        &bigstar;
                        &starf;
                        &bigstar;
                        &star;
                        

                        <i class="fa fa-star checked"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i><!--Empty star-->
                    </div>
                </div>
                <!--Comments---------------------------------------->
                <div class="client-comment">
                    <p>The jeans are very comfortable and stretchy. The material of this clothing is also of very high quality. I recommend everyone to get this as it is very easy to mix and match with this pair of jeans. 

                    </p>
                </div>
            </div>
            <!--BOX-2-------------->
            <div class="testimonial-box">
                <!--top------------------------->
                <div class="box-top">
                    <!--profile----->
                    <div class="profile">
                        <!--img---->
                        <div class="profile-img">
                            <img src="images/c-2.jpg" />
                        </div>
                        <!--name-and-username-->
                        <div class="name-user">
                            <strong>Darvin Toh</strong>
                            <span>@DTFTW</span>
                        </div>
                    </div>
                    <!--reviews------>
                    <div class="reviews">
                        &starf;
                        &bigstar;
                        &starf;
                        &bigstar;
                        &star;
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i><!--Empty star-->
                    </div>
                </div>
                <!--Comments---------------------------------------->
                <div class="client-comment">
                    <p>I bought this shirt a few days back and I do not regret buying it at all! It is very comfortable and the material is of the highest quality. I recommend all to get as it is not too expensive. </p>
                </div>
            </div>
            <!--BOX-3-------------->
            <div class="testimonial-box">
                <!--top------------------------->
                <div class="box-top">
                    <!--profile----->
                    <div class="profile">
                        <!--img---->
                        <div class="profile-img">
                            <img src="images/c-3.jpg" />
                        </div>
                        <!--name-and-username-->
                        <div class="name-user">
                            <strong>Ngee Feng</strong>
                            <span>@NFFTW</span>
                        </div>
                    </div>
                    <!--reviews------>
                    <div class="reviews">
                        &starf;
                        &bigstar;
                        &starf;
                        &bigstar;
                        &star;
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i><!--Empty star-->
                    </div>
                </div>
                <!--Comments---------------------------------------->
                <div class="client-comment">
                    <p>This pair of shorts is very comfartable and the material is very soft as well. However, to those interested in buying, do take note that the sizing might be abit different from what you are used to. It runs one size down so do remember to get one size larger than your usual.</p>
                </div>
            </div>
            <!--BOX-4-------------->
            <div class="testimonial-box">
                <!--top------------------------->
                <div class="box-top">
                    <!--profile----->
                    <div class="profile">
                        <!--img---->
                        <div class="profile-img">
                            <img src="images/c-4.jpg" />
                        </div>
                        <!--name-and-username-->
                        <div class="name-user">
                            <strong>Matt</strong>
                            <span>@MattFTW</span>
                        </div>
                    </div>
                    <!--reviews------>
                    <div class="reviews">
                        &starf;
                        &bigstar;
                        &starf;
                        &bigstar;
                        &star;
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i><!--Empty star-->
                    </div>
                </div>
                <!--Comments---------------------------------------->
                <div class="client-comment">
                    <p>This pair of casual shirt is very affordable and very easy to match with other clothings as well. Material is up there for the price of this clothing.</p>
                </div>
            </div>
        </div>
    </section>

  

</template>

<script>
export default {

}
</script>

<style>
*{
    margin: 0px;
    padding: 0px;
    font-family: poppins;
    box-sizing: border-box;
}
a{
    text-decoration: none;
}
#testimonials{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width:100%;
}
.testimonial-heading{
    letter-spacing: 1px;
    margin: 30px 0px;
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.testimonial-heading h1{
    font-size: 2.2rem;
    font-weight: 500;
    background-color: #202020;
    color: #ffffff;
    padding: 10px 20px;
}
.testimonial-heading span{
    font-size: 1.3rem;
    color: #252525;
    margin-bottom: 10px;
    letter-spacing: 2px;
    text-transform: uppercase;
}
.testimonial-box-container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width:100%;
}
.testimonial-box{
    width:500px;
    box-shadow: 2px 2px 30px rgba(0,0,0,0.1);
    background-color: #ffffff;
    padding: 20px;
    margin: 15px;
    cursor: pointer;
}
.profile-img{
    width:50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 10px;
}
.profile-img img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}
.profile{
    display: flex;
    align-items: center;
}
.name-user{
    display: flex;
    flex-direction: column;
}
.name-user strong{
    color: #3d3d3d;
    font-size: 1.1rem;
    letter-spacing: 0.5px;
}
.name-user span{
    color: #979797;
    font-size: 0.8rem;
}
.reviews{
    color: #f9d71c;
}
.box-top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}
.client-comment p{
    font-size: 0.9rem;
    color: #4b4b4b;
}
.testimonial-box:hover{
    transform: translateY(-10px);
    transition: all ease 0.3s;
}
 
@media(max-width:1060px){
    .testimonial-box{
        width:45%;
        padding: 10px;
    }
}
@media(max-width:790px){
    .testimonial-box{
        width:100%;
    }
    .testimonial-heading h1{
        font-size: 1.4rem;
    }
}
@media(max-width:340px){
    .box-top{
        flex-wrap: wrap;
        margin-bottom: 10px;
    }
    .reviews{
        margin-top: 10px;
    }
}
::selection{
    color: #ffffff;
    background-color: #252525;
}
 
</style>