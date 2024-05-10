import React from 'react';
import { BiLike } from "react-icons/bi";
import { RiFeedbackLine } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";
import LabourCard from './LabourCard';

const LabourProfile = () => {
  return (
    <div className='flex items-center flex-col relative mb-5'>
      <div className='flex p-10 m-auto gap-2 max-lg:flex-col'>
        <div className='flex flex-col items-center'>
          <div className='flex flex-col items-center'>
            <img className='rounded-full h-48 w-48 border-green-500 border-4'
              src="https://i.pinimg.com/736x/07/33/ba/0733ba760b29378474dea0fdbcb97107.jpg" alt="" />
            <p className='border-blue-200 border-2 px-4 shadow-sm shadow-blue-200 text-lg text-blue-500 rounded-md m-2 '>Trade</p>
          </div>
          <div className='flex gap-10 text-3xl mt-5'>
            <button className=''><BiLike /></button>
            <button><RiFeedbackLine /></button>
          </div>
        </div>
        <div className='flex flex-col justify-between p-5 relative'>
          <div className='flex gap-2'>
            <div className='bg-slate-900 w-1'></div>
            <div>
              <h1 className='text-4xl font-semibold '>Name</h1>
              <p className='italic font-normal'>Exp: 2 years</p>
            </div>
          </div>
          <div className='text-3xl absolute right-0 rounded-md p-2 border-2 border-slate-400 text-slate-400 '>
            <button><PiPhoneCallFill /></button>
          </div>
          <div className='mt-5'>
            <p className='flex items-center gap-2'><FaPhoneAlt /> 9028356071 </p>
            <p className='flex items-center gap-2'><MdLocationOn /> Jankipuram Extension lucnnow 202020</p>
          </div>
        </div>
      </div>

      <div className='bg-white  justify-center border-t-[1px] border-slate-400 w-full h-[1px] mb-6 sticky top-0 z-50'>
      <div className='text-3xl bg-white text-center  border-[1px] border-t-0 px-2 rounded-md rounded-t-none border-slate-400 '>Feedback</div>
      </div>
      
      <div className='overflow-y-auto max-h-[calc(100vh - 250px)]'>
        {/* <p className='p-5 '>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio hic vitae repellendus. Perferendis non nobis corporis Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus libero temporibus nisi? Deleniti tenetur molestiae doloremque eos dolorem dicta. Odio magni voluptas cumque, accusantium reprehenderit laudantium saepe fugit praesentium voluptatem ipsa iste unde dolore inventore beatae consequatur ducimus nisi at culpa, soluta similique deleniti accusamus rem. Maiores, et? Qui nostrum quidem quisquam commodi! Non quaerat inventore saepe sapiente nulla tempora in odio aut obcaecati dolores magni et doloribus ipsum eligendi vitae commodi totam qui libero, iste asperiores exercitationem, corrupti consequatur corporis. Aliquam excepturi adipisci ad! Harum modi dolore repellendus ullam voluptatibus illum sunt, ratione nostrum reprehenderit, iste laborum cum deleniti sed? Assumenda cum id obcaecati alias iure quis laudantium quos perferendis totam. Id inventore provident aut quia debitis praesentium harum tenetur natus porro, beatae assumenda rerum quod libero et similique omnis voluptatibus officiis voluptas, asperiores sint voluptatem minima eaque maxime blanditiis! Nam distinctio vel tempore at quisquam repudiandae voluptatum provident. Debitis dolor optio corrupti dolorem. Amet odit non praesentium itaque, autem tenetur aut aspernatur earum assumenda, ab adipisci laborum iure quasi esse officiis cumque quas fugit quidem, magnam laboriosam. Quis nulla aut accusamus velit modi? Quos fugiat, velit quae esse fugit dolor itaque voluptates magni repellat necessitatibus magnam natus deserunt, est quidem quas in minima dolorum consequatur dolorem at! Culpa placeat numquam quos, nulla reiciendis aut, dolorem repudiandae omnis molestias, unde earum illo minima maxime ex sequi sed quidem. Deleniti sequi incidunt at nemo, ipsa dolorum corrupti? Nam eius repudiandae saepe, magnam, alias in sequi non voluptatibus ipsam error enim libero consectetur delectus odio exercitationem fugiat, facilis ullam? Voluptate, ratione! Eum, saepe. Sequi accusantium dolores magnam numquam cupiditate assumenda voluptatibus, repudiandae consequatur ex minima ipsa, voluptates dicta ut harum eius quod iure officiis necessitatibus rem corporis eveniet accusamus! Repellendus ipsa aliquid tempore quisquam deserunt numquam eligendi quas recusandae laboriosam animi eaque alias veniam nam quasi possimus voluptate molestias perferendis natus amet, minus ipsam quibusdam dolor dolore. Eum est tempora quibusdam modi, laborum quasi quis eligendi culpa libero minima consequuntur, sint odio sit fugiat commodi aut voluptate! Exercitationem pariatur, eaque delectus odit omnis corrupti nesciunt laudantium voluptatibus possimus quod at quia, ipsam explicabo dicta placeat, ipsa ipsum quaerat facere illum. Officiis enim nemo quaerat reiciendis, hic error eligendi animi, sunt illum fuga vel nulla quas quasi dolor? Sit facilis ea voluptas temporibus, ipsum incidunt. Quo voluptatem fuga illum dicta impedit ipsum accusamus id quis earum voluptas. Aut, doloremque. Culpa quam totam voluptas quod quia velit ut, ex labore dolor! Quisquam praesentium dicta exercitationem ea et maiores minus esse, eos earum eius nisi, dolor ipsum nesciunt recusandae? Consequuntur autem incidunt ipsam optio doloremque eius numquam aliquam similique error labore possimus, odio reiciendis alias at sequi suscipit velit enim, sint, nulla non aut minima hic. Eos itaque sint possimus vero quidem, facere molestiae voluptatum. Doloremque magnam dignissimos et illo assumenda, praesentium vitae obcaecati illum placeat dolorem voluptate! Molestias, distinctio sequi atque fugiat amet excepturi officia, a deleniti consequuntur natus possimus dicta, nemo unde neque nostrum beatae minima nesciunt tenetur qui laudantium eum ut voluptate. Ad perspiciatis eius adipisci iusto cumque architecto unde iste, vero excepturi error? Temporibus nesciunt natus recusandae velit aliquid veritatis, culpa molestias optio illo tempora minima corporis, porro laboriosam eum fuga nihil. Repudiandae atque nobis ea fuga! Explicabo, ipsa eligendi. Eos at reiciendis, ipsum consequatur accusantium officia tempora itaque quisquam id, reprehenderit magni explicabo omnis, quibusdam suscipit provident cupiditate repellat recusandae possimus distinctio fugit qui. Harum a aperiam quaerat ullam veniam fugiat perspiciatis ipsam quisquam provident necessitatibus porro vero voluptatem corporis vel autem velit voluptatum minima, quod, maiores culpa sed. Tempore eaque vitae repellat quidem natus dolore ullam corporis sapiente iste modi optio quia consequatur dignissimos debitis eum quos doloribus animi quisquam, nisi saepe numquam! Laborum voluptatum voluptatem cum in ipsum ipsa commodi voluptatibus eaque est ab obcaecati saepe, iusto voluptas sed. Dicta blanditiis totam soluta eligendi maiores, tempora quas quasi. Facere soluta asperiores laudantium laboriosam rem magnam, quibusdam repellat aperiam officia porro animi minus recusandae iusto amet commodi. Perspiciatis quae consequuntur quam sunt eius, iusto in totam? Reprehenderit ad accusantium nihil rerum officiis molestiae quod minus quidem, dolores, explicabo, provident minima vitae ducimus optio at. Ipsam numquam error ab natus. Iure eaque eveniet illo veniam. Obcaecati nemo dolore iusto consequatur! Quidem facilis, sapiente nihil sit velit non quis voluptatibus nisi eum architecto quisquam consequuntur sed modi nulla amet illo. Perspiciatis iure animi reiciendis maxime a eos! Perspiciatis nostrum nam aliquid, similique autem vel ipsum incidunt quo. Ad voluptatibus consectetur cumque ducimus, sed voluptatem praesentium mollitia explicabo quis quisquam! Natus deserunt illum nihil sapiente, nam numquam harum itaque iusto beatae totam consectetur quisquam laboriosam quia in nobis expedita quaerat et doloribus mollitia iure ad magnam porro? Natus voluptas minus exercitationem recusandae alias impedit sint ad nihil, doloremque, voluptatum beatae aliquid sequi veritatis! Quia quibusdam ipsum minima possimus aliquid sed hic numquam dolorum nulla consequuntur, assumenda deleniti aperiam necessitatibus laboriosam. Nobis ipsam quasi officiis incidunt odio doloremque error maxime sapiente reprehenderit quaerat. Aut, recusandae facilis debitis repellat soluta doloribus tempore deserunt nam tempora, eos necessitatibus reprehenderit quod possimus a? Fugiat est vitae earum esse eaque explicabo dolore. Explicabo laborum magnam deleniti error, aut natus eveniet reiciendis doloribus accusantium, fugiat, minus facere! Maiores iusto numquam eius dolores quisquam aperiam, sint similique voluptatem laborum! Earum, aliquid ipsam sunt quisquam voluptatem ea corrupti non amet possimus aliquam odio aperiam beatae provident, recusandae officia? Ipsam laborum iste fugit accusantium excepturi est sed vitae voluptatibus ipsa?temporibus sapiente maiores odio vel unde fugiat inventore! Cumque ipsa quis, repudiandae voluptates cupiditate at blanditiis impedit asperiores provident officiis eligendi velit pariatur repellat molestias neque unde? Neque, sint? Fugit, ab inventore assumenda tempore animi illo ut illum esse cum aperiam itaque eveniet quam repellendus. Quos debitis vitae totam quod minima sunt dolore porro eveniet laborum repudiandae? Nemo qui eveniet et vitae saepe temporibus cupiditate. Beatae quaerat, labore doloribus voluptatibus culpa deleniti aperiam unde quibusdam alias sint molestiae fugiat numquam sed natus a fuga quo eligendi odit, officiis libero, placeat deserunt quasi inventore harum! Dolore, repudiandae nobis voluptate perspiciatis libero vitae cupiditate quidem voluptates nihil laborum ab modi fugiat similique commodi mollitia nisi incidunt quibusdam ut ea aliquam nostrum facilis corporis. Architecto eaque ratione expedita. Velit laudantium dolorem reiciendis asperiores architecto doloribus dicta quaerat.
        </p> */}
        <LabourCard />
        <LabourCard />
        <LabourCard />
        
        
      </div>
    </div>
  )
}

export default LabourProfile;
