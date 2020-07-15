# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Business.destroy_all
Review.destroy_all

user1 = User.create(

first_name: "spencer",
last_name: "blam",
email: "spencer@gmail.com",
is_business: true,
img_url: "https://likewise-stage.azureedge.net/uploads/3eb6cf23-895b-45e9-b92c-5fb1b457dd04/bill-gates-profile-pic.jpg",
password_digest: BCrypt::Password.create("123"),
zip_code: "29403"
)

user2 = User.create(

first_name: "gene",
last_name: "camp",
email: "gene@gmail.com",
is_business: false,
img_url: "https://di2ponv0v5otw.cloudfront.net/posts/2018/02/02/5a7534732ab8c5a1a0ef5484/m_5a75347d1dffdaf18a89fa7c.jpg",
password_digest: BCrypt::Password.create("123")
)

user3 = User.create(

first_name: "bryan",
last_name: "rohunda",
email: "bryan@gmail.com",
is_business: false,
img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRI2oAGth8WZ1UQS4cNmO5qv6yQ9dtPZRfpNpbUWAb-TBwFPJfM&usqp=CAU",
password_digest: BCrypt::Password.create("123")
)

b1 = Business.create(

    user_id: user1.id, 
    img_url: "https://www.pressdemocrat.com/csp/mediapool/sites/dt.common.streams.StreamServer.cls?STREAMOID=zDPjXvg_28mtCGWAyRRwBc$daE2N3K4ZzOUsqbU5sYtATCRnSFCvkAoTCu2m3KzsWCsjLu883Ygn4B49Lvm9bPe2QeMKQdVeZmXF$9l$4uCZ8QDXhaHEp3rvzXRJFdy0KqPHLoMevcTLo3h8xh70Y6N_U_CryOsw6FTOdKL_jpQ-&CONTENTTYPE=image/jpeg",
    name: "URJ Camp Newman",
    address: "4088 Porter Creek Road",
    city: "Santa Rosa",
    website: "https://campnewman.org/",
    state: "california",
    zip_code: "95404",
    avg_review: 5.0,
    is_approved: true,
    bio: "At URJ Camp Newman, we’re building a foundation for a vibrant Jewish life. Guided by experienced staff and Jewish professionals, we offer 25 traditional and specialty overnight summer sessions from 1 to 8 weeks at the beautiful bay-side campus of Cal Maritime – with outdoor adventure at our Porter Creek home! Our camp empowers children and teens to better themselves, their communities and the world."
)


b2 = Business.create(
    user_id: user1.id,
    img_url: "data:image/jpeg;base64,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",
    name: "Zoeys Daycare",
    address: "120 Cannon Street Charleston South Carolina 29403",
    city: "Charleston",
    state: "South Carolina",
    zip_code: "95404",
    is_approved: true,
    bio: "Great Child care in the heart of Charleston"
)

b3 = Business.create(

    user_id: user1.id,
    img_url: "https://cdn.website.thryv.com/b645b356da934154ad893e0d61dd37c6/dms3rep/multi/363042-callout-1-d579.jpg",
    name: "Happy Kids",
    address: "28 woolfe Street Charleston South Carolina",
    city: "Charleston",
    state: "South Carolina",
    zip_code: "29403",
    is_approved: true,
    bio: "At URJ Camp Newman, we’re building a foundation for a vibrant Jewish life. Guided by experienced staff and Jewish professionals, we offer 25 traditional and specialty overnight summer sessions from 1 to 8 weeks at the beautiful bay-side campus of Cal Maritime – with outdoor adventure at our Porter Creek home! Our camp empowers children and teens to better themselves, their communities and the world."
)

b4 = Business.create(

    user_id: user1.id,
    img_url: "https://www.kittyhawk.com/wp-content/uploads/2016/07/groupbeachdrills.jpg",
    name: "Sol Surfers Surf Camp",
    address: "800 E Ashley Ave, Folly Beach, SC 29439",
    city: "Folly Beach",
    state: "South Carolina",
    zip_code: "29439",
    is_approved: true,
    bio: "With over thirty-five years of surfing experience, Kai Dilling is dedicated to helping students of all ages and abilities safely learn to appreciate an activity that can become a healthy, relaxing love of a lifetime. Kai is a native of the area and has a BS Degree in Education from the College of Charleston and taught Middle School Science for 10 years. He is presently teaching surfing at the College of Charleston in the School of Education, Health, and Human Performance department. He is a certified NASM personal trainer and yoga instructor. Since 2000, Sol Surfers Surf Camp, LLC has provided a responsible and educational program that centers on safety and ocean knowledge and fun. Part of the Billabong Camps program, Sol Surfers has garnered world-wide acclaim."
)


b5 = Business.create(

    user_id: user1.id,
    img_url: "https://thenypost.files.wordpress.com/2020/02/daycare.jpg?quality=90&amp;strip=all&amp;w=1200",
    name: "Mommy Daycare",
    address: "891 Avenue Z, Brooklyn, NY 11235",
    city: "Brooklyn",
    state: "NY",
    zip_code: "11235",
    is_approved: true,
    bio: "If you are looking for a safe and happy place for your child then come in for a visit. We have two Group Family Day Care programs that you can visit and explore.We care for children 3 months and up to 5 years of age. Our goal is to provide a fun and safe learning environment, while encouraging social, emotional and physical development. Each child receives quality care in a warm loving environment with lots of affection."
)


b6 = Business.create(


    img_url: "https://18vi1n40obrku6xfb34e3uj4dx-wpengine.netdna-ssl.com/wp-content/uploads/2017/03/drop-in-child-care.jpg",
    name: "Mommy Daycare",
    address: "891 Avenue Z, Brooklyn, NY 11235",
    city: "Brooklyn",
    state: "NY",
    zip_code: "11235",
    is_approved: true,
    bio: "Mommy day care is the day care that parents love. We have been opporating for over 24 years in Brooklyn"
)

b7 = Business.create(


    img_url: "https://www.jweekly.com/wp-content/uploads/2020/03/CAMPStawonga-cabins1WEB.jpg",
    name: "Camp Tawonga",
    address: "31201 Mather Rd, Groveland, CA 95321",
    city: "Groveland",
    state: "CA",
    zip_code: "95321",
    is_approved: true,
    bio: "Camp Tawonga, we’re building a foundation for a vibrant Jewish life. Guided by experienced staff and Jewish professionals, we offer 25 traditional and specialty overnight summer sessions from 1 to 8 weeks at the beautiful bay-side campus of Cal Maritime – with outdoor adventure at our Porter Creek home! Our camp empowers children and teens to better themselves, their communities and the world."
)

b8 = Business.create(


    img_url: "https://3toh891af6rf1cn1po1ecevj-wpengine.netdna-ssl.com/wp-content/uploads/2019/11/DeerRunCamps_Youth_9889-1024x683.jpg",
    name: "YMCA Camp High Harbour",
    address: "40 Old Sandtown Rd SE, Cartersville, GA 30121",
    city: "Cartersville",
    state: "GA",
    zip_code: "30121",
    is_approved: true,
    bio: "We are currently planning on operating sessions 4-9 at both Lake Burton and Lake Allatoona, utilizing new health and safety protocols and enhanced camp procedures. We are awaiting further guidance from the Governor and the CDC and will communicate further details soon."
)

# b8 = Business.create(


#     img_url: "https://3toh891af6rf1cn1po1ecevj-wpengine.netdna-ssl.com/wp-content/uploads/2019/11/DeerRunCamps_Youth_9889-1024x683.jpg",
#     name: "YMCA Camp High Harbour",
#     address: "40 Old Sandtown Rd SE, Cartersville, GA 30121",
#     city: "Cartersville",
#     state: "GA",
#     zip_code: "30121",
#     is_approved: true,
#     bio: "We are currently planning on operating sessions 4-9 at both Lake Burton and Lake Allatoona, utilizing new health and safety protocols and enhanced camp procedures. We are awaiting further guidance from the Governor and the CDC and will communicate further details soon."
# )

b9 = Business.create(
    img_url: "https://scontent-mia3-1.xx.fbcdn.net/v/t31.0-8/19055035_1536866296335573_6923228035452517038_o.jpg?_nc_cat=106&_nc_sid=9267fe&_nc_ohc=HmMw2AJGZosAX9h_tPF&_nc_ht=scontent-mia3-1.xx&oh=aaabee4254b7b30c649af3e814a0430f&oe=5EF64DED",
    name: "Camp Vinson Valley",
    address: "103 W Heritage St GA 31008",
    city: "Cartersville",
    state: "GA",
    zip_code: "31008",
    is_approved: true,
    bio: "A summer day camp with sports, hiking, archery, and canoeing. Camp Vinson Valley is a ministry of Byron United Methodist Church."
)

 at9 = Trait.create(
    name: "archery"
)

b10 = Business.create(
  img_url: "https://www.google.com/maps/uv?hl=en&pb=!1s0x88602d17580c4bd1%3A0x7c46b6fff245f30f!3m1!7e115!4s%2F%2Fgeo0.ggpht.com%2Fcbk%3Fpanoid%3DcI-29eDUHR9-oMRt56GTcw%26output%3Dthumbnail%26cb_client%3Dsearch.gws-prod.gps%26thumb%3D2%26yaw%3D75.06187%26pitch%3D0%26thumbfov%3D100%26w%3D130%26h%3D87!5scamp%20in%20alabama%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e10!2sAF1QipMSFRknBdUT0JpYYHIaQtfAg4m3EwZOgv4DN3Ow",
  name: "Camp Skyline Ranch",
  address: "4888 AL-117",
  city: "Mestone",
  state: "AL",
  zip_code: "35984",
  is_approved: true,
  bio: "Camp Skyline is a residential, summer camp in northern Alabama for girls. We offer four 2-week sessions for girls going into grades 1 - 11, as well as three 1-week mini-sessions for girls going into grades 1 – 3. We are a Christian camp and seek to do everything for the glory of God and the encouragement of our campers."
)
attribute10 = Trait.create(
    name: "horseback riding",
)
b11 = Business.create(
  img_url: "https://www.google.com/maps/uv?hl=en&pb=!1s0x886772e8b24cf49d%3A0xf1063724d8283fc!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipN1JthFR_UkKn4xpyylAC2mO7AMXXVFDuOtqhJG%3Dw86-h87-n-k-no!5scamp%20in%20tennessee%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e10!2sAF1QipNC9NYjQVieuB_LFWNMPC5_-9Sz1_5yN10T0UND#",
  name: "Cedar Lake Camp",
  address: "235 Conatser Ln",
  city: "Livingston",
  state: "TN",
  zip_code: "38570",
  is_approved: true,
  bio: "We also have lots of fun, and many return again and again to enjoy the simple pleasures of life here in a traditional camp setting. Our campers have a blast participating in the many camp activities we offer, such as swimming, ziplining, canoeing, archery, hiking, fishing, crafts, skits, games, and testing their skills on the challenge course."
)
attribute11 = Trait.create(
    name: "zipline",
)
b12 = Business.create(
  img_url: "https://www.google.com/maps/uv?hl=en&pb=!1s0x52b6c1c5acb1b355:0xc0c028998f0bf8f8!3m1!7e115!4shttps://lh5.googleusercontent.com/p/AF1QipOhoABGcP2gtEg0DJ7rXkTXX6zPTIZbofY7rpvy%3Dw260-h175-n-k-no!5scamp+in+minnesota+-+Google+Search&imagekey=!1e10!2sAF1QipOhoABGcP2gtEg0DJ7rXkTXX6zPTIZbofY7rpvy",
  name: "Camp Lincoln for Boys and Camp Lake Hubert for Girls",
  address: "23416 Camp Lincoln Rd",
  city: 'Lake Hubert',
  state: 'MN',
  zip_code: '56459',
  is_approved: true,
  bio: "For over 110 years, Camp Lincoln for Boys and Camp Lake Hubert for Girls have excelled in providing one of the best sleep-away adventures in the United States. Our brother-sister camps are located on opposite sides of Lake Hubert. With top of the line activities and instruction, our family-run camps offer the perfect playground for skill-building, fostering emotional growth, and just having a blast. "
)
b13 = Business.create(
  img_url: "https://www.visitutah.com/media/15896245/web2000_renderings-for-woodward-winter-20190412-view-2.jpg?quality=86",
  name: "Woodward Park City Summer Camp",
  address: "3863 Kilby Rd",
  city: "Park City",
  state: "UT",
  zip_code: "84098",
  is_approved: true,
  bio: "Multi-day summer camp programs provide fun, recreation, and skill progression for kids 6 and older, of any ability level. Choose a 5 or 10-day camp program"

)

b8 = Business.create(
    img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTG_u34CrovxC6lIiAzFAWuiI30srjW2V4_EIH2gtadzljkxXku&usqp=CAU", 
    name: "East Cobb Sports Camp",
    address: "71 Sherwood Lane SE, GA 30067",
    city: "Marietta",
    state: "GA",
    zip_code: "30067",
    is_approved: true,
    bio: "Join us for a week-long athletic adventure! East Cobb Sports Camp offers so many activities it's impossible not to find something your child won't like. We offer activities and sports such as flag-football, tennis, soccer, volleyball, baseball/softball, kickball, basketball, lacrosse, four square and many more! There will also be supervised swimming and other fun activities such as tag, relays, art activities, and more! Register today to reserve your child's spot!",
)
b8 = Business.create(
    img_url: "https://www.fcacamps.org/assets/sportscamp_slidein-300x300.jpg",
    name: "FCA Camp",
    address: "8701 Leeds Road, MO 30067",
    city: "Kanas City",
    state: "MO",
    zip_code: "64129",
    is_approved: true,
    bio: "Sports Camps are for athletes and coaches who want to develop their athletic skills. Outstanding instruction, skill development and intense competition prepare the camper for future athlete competition. Sports Camps include Sport-Specific camps in which the camper selects one sport for the entire camp experience, and Multi-Sport camps in which the camper is trained in a specific sport and competes in a variety of sports as a Huddle",
)
b8 = Business.create(
    img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTHrSK5MkrDs27ZIuEki0L9R_j6CFfOk3KHcxJQNyM-H3VmcVtX&usqp=CAU",
    name: "Planet Bravo",
    address: "2919 W. Burbank Blvd, Suite A Burbank, CA 91505",
    city: "Burbank",
    state: "CA",
    zip_code: "91505",
    is_approved: true,
    bio: "PB @ Home is truly a unique and fun social and learning experience for kids! This is not school, and it's not just a course. This online camp is an ON-and-OFF computer six-hour day (for a whole week) filled with thematic challenges, projects, games, music, laughs, prizes, and much more - just like our in-person camp, except from the comfort of your home. You pick the area of study, and awesome camp counselors entertain and educate all day!",
    )
b8 = Business.create(
    img_url: "https://clients-content.mindbodyonline.com/studios/YOUNGCHEFSACADEMYMARIETTA1/reservations/75.jpg?osv=637147045795011056",
    name: "Young Chefs® Academy Summer Culinary Sessions",
    address: "1595 Peachtree Parkway, Suite 122 Cumming, GA 30041",
    city: "Cumming",
    state: "GA",
    zip_code: "30041",
    is_approved: true,
    bio: "Summer is heating up at Young Chefs Academy! If you are looking to find a rewarding summer activity, YCA is the place to be to help beat the boredom blues…and learn a life-long skill in a fun, safe setting!",
    )
    b8 = Business.create(
    img_url: "https://campaign.goddardschool.com/dma/img/slider-1.jpg",
    name: "Goddard School",
    address: "3115 Parkbrooke Circle Woodstock, GA 30189",
    city: "Woodstock",
    state: "GA",
    zip_code: "30189",
    is_approved: true,
    bio:"Our summer camp curriculum incorporates STEAM learning (science, technology, engineering, arts and mathematics) into exciting and fun experiences for your child every day! The founding principle of our curriculum is that children experience the most genuine learning when they are having fun. We have integrated this philosophy into every aspect of our summer camp to foster play-based learning opportunities both inside and outside the classroom.",
    )

attribute13 = Trait.create(
    name: "skateboarding",
)

attribute12 = Trait.create(
    name: "rock climbing",
)


puts ("Created Businesses")

attribute1 = Trait.create(
    name: "swimming",
)



attribute2 = Trait.create(
    name: "sailing",
)

attribute3 = Trait.create(
    name: "basketball",
)


attribute4 = Trait.create(
    name: "soccer",
)

attribute5 = Trait.create(
    name: "surfing",
)

30.times do
    BusinessTrait.create(business_id: Business.all.sample.id, trait_id: Trait.all.sample.id)
 end

BusinessTrait.create(
    business_id: b1.id,
    trait_id: attribute1.id
)

BusinessTrait.create(
    business_id: b6.id,
    trait_id: attribute2.id
)

BusinessTrait.create(
    business_id: b2.id,
    trait_id: attribute4.id
)
BusinessTrait.create(
    business_id: b2.id,
    trait_id: attribute3.id
)


BusinessTrait.create(
    business_id: b3.id,
    trait_id: attribute4.id
)
BusinessTrait.create(
    business_id: b4.id,
    trait_id: attribute5.id
)


BusinessTrait.create(
    business_id: b4.id,
    trait_id: attribute2.id
)

BusinessTrait.create(
    business_id: b4.id,
    trait_id: attribute3.id
)

BusinessTrait.create(
    business_id: b7.id,
    trait_id: attribute1.id
)

BusinessTrait.create(
    business_id: b6.id,
    trait_id: attribute2.id
)

BusinessTrait.create(
    business_id: b5.id,
    trait_id: attribute3.id
)

BusinessTrait.create(
    business_id: b5.id,
    trait_id: attribute1.id
)

review1 = Review.create(
    user_id: user1.id,
    business_id: b1.id,
    message: "Love this camp so much",
    rating: 5

)

review2 = Review.create(
    user_id: user2.id,
    business_id: b1.id,
    message: "Had an amazing expience and met so many people",
    rating: 5
)


monday = Hour.create(
    business_id: b1.id,
    day: "monday",
    open_time: "7:00AM",
    close_time: "8:00PM"
)

Tuesday = Hour.create(
    business_id: b1.id,
    day: "tuesday",
    open_time: "7:00AM",
    close_time: "9:00PM"
)

follow1 = Follow.create(
    user_id: user1.id,
    business_id: b1.id
)



puts "Done"



