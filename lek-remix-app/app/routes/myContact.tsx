function MyProfile () {
    const name = "Jakkarat Charoensuk";
    const profile = "/images/img1.jpg";
    const info = "สุนัขหน้าอึนที่จ้องจะเล่นคุณ";
return (
<div className="max-w-sm rounded overflow-hidden shadow-lg">
  <img className="w-full" src={profile} title={name}/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2"> {name} </div>
    <p className="text-gray-700 text-base">
    {info}
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#หมาสุดโหด</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#หมาน่ารัก</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#หมาดื้อ</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#สุนัขพักใจ</span>
  </div>
</div>
);
}

export default function MyContact () {
    return (
        <div>
            <h1>My Contact</h1>
            <hr />
            <MyProfile />
        </div>
    );
}