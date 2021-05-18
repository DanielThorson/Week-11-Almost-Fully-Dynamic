import articles from "./hackerNoonArticles";

const Card = (props) => {
  // console.log("Author:", articles.Programming[0].author);
  // console.log(articles.Programming[0].titleText);
  // console.log(articles.Programming[0].titleLink);
  // console.log("First consolelog",Object.keys(articles));
  return (
    <div className="black">
      <div>
        <h3>{props.titleText}</h3>
        {props.titleText ? <div className="divider" /> : ""}
        {props.children}
        <p>{props.titleLink}</p>
        <div className="flex">
          <h3 className="margin-twenty">{props.author}</h3>
          <h4 className="margin-twenty">{props.userName}</h4>
        </div>
        <div className="flex">
          <h5 className="margin-twenty">{props.hashTag}</h5>
          <h5 className="margin-twenty">{props.readIn}</h5>
          <h6 className="margin-twenty">{props.posted}</h6>
        </div>
      </div>
    </div>
  );
};

// const StoryTag = () => (
//   <div className="black">
//     <div className="">
//       <h1>{Object.keys(articles)[0]}</h1>
//     </div>
//   </div>
// );

// const StoryTag = () => (
//   <div className="black">
//     <div className="">
//       <h1>{Object.keys(articles).map(function (num) {
//         console.log("Second consolelog",Object.keys(articles));
//         return (
//           <div
//             // <h3>{props.titleText}</h3>
//           ><h2
//           articleSection={num.articles}></h2></div>
//         );
//       })}</h1>

//     </div>
//   </div>
// );

// //this is the closet!!!!!!!!
// const StoryTag = () => (
//   <div className="black">
//     <div className="">
//       <h1>{Object.keys(articles)}</h1>

//     </div>
//   </div>
// );

// const StoryTag = () => (
//   <div className="black">
//     <div className="">
//       <h1>{Object.keys(articles)}{console.log(Object.entries(articles))}</h1>
//     </div>
//   </div>
// );

const StoryTag = (props) => {
  return (
    <div className="black">
      <h2>{props.articleSection}</h2>
    </div>
  );
};

const StoryCardContent = () => (
  <div className="black">
    <div className="wrapper">
      {articles.Programming.map(function (num) {
        return (
          <Card
            titleText={num.titleText}
            titleLink={num.titleLink}
            author={`Author: ${num.author}`}
            userName={num.userName}
            hashTag={num.hashTag}
            readIn={num.readIn}
            posted={`Posted: ${num.posted}`}
          ></Card>
        );
      })}
    </div>
  </div>
);

const Thing = () => (
  <div>
    {Object.keys(articles).map(function (keyName, keyIndex) {
      console.log(keyName);
      return <StoryTag articleSection={keyName}></StoryTag>;
    })}
    <div>
      <StoryCardContent />
    </div>
  </div>
);

export const Body = () => (
  <div className="center">
    <div className="cell inline">
      <Thing></Thing>
    </div>
  </div>
);
