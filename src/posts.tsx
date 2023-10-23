// in src/posts.tsx
import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton
} from "react-admin";

/**
 * ReferenceField: reference 데이터를 API로 fetch
 * reference: <Resource>의 name 필드
 * @constructor
 */
export const PostList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <ReferenceField source="userId" reference="users" link="show"/>
            <TextField source="title" />
            <EditButton />
        </Datagrid>
    </List>
);