import UpdateItem from "../components/UpdateItem";

// the GET query is loaded into each page from the pageProps.query = ctx.query; on line 19 in _app.js
// this makes the get parameters available in the 'props.query' prop
// const Update = (props) => (
const Update = ({ query }) => (
  <div>
    <UpdateItem id={query.id} />
  </div>
);

export default Update;
