import {Admin, ListGuesser, Resource, ShowGuesser,} from "react-admin";
import {dataProvider} from "./dataProvider";
import {UserList} from "./users";
import {PostList} from "./posts";

/**
 * Resource: API 호출
 * name: /users, /posts 등 path
 * recordRepresentation: reference된 컬럼에서 보여질 데이터
 */
export const App = () => <Admin dataProvider={dataProvider}>
  {/* /posts 엔드포인트로 리소스 조회*/}
  <Resource name="posts" list={PostList} />
  <Resource name="users" list={UserList} show={ShowGuesser} recordRepresentation="name" />
</Admin>;
