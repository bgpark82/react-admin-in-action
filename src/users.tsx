import {Datagrid, EmailField, List, SimpleList, TextField} from 'react-admin';
import {useMediaQuery} from "@mui/material";
import MyUrlField from "./MyUrlField";

/**
 * API로 조회한 쿼리 파라미터를 읽음
 *
 * List : fetch data
 * - Datagrid : rendering
 * - Datagrid는 RecordContext를 생성한다 (useRecordContext: record 읽음)
 * SimpleList : fetch data
 * - Material UI의 List와 ListItem 사용
 */
export const UserList = () => {
    const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));

    return (
        <List>
            {isSmall ?
                (
                    <SimpleList
                        primaryText={(record) => record.name}
                        secondaryText={(record) => record.username}
                        tertiaryText={(record) => record.email}
                    >
                    </SimpleList>
                ) : (
                    <Datagrid rowClick="show">
                        <TextField source="id" />
                        <TextField source="name" />
                        <TextField source="username" />
                        <EmailField source="email" />
                        <TextField source="address.street" />
                        <TextField source="phone" />
                        <MyUrlField source="website" />
                        <TextField source="company.name" />
                    </Datagrid>
                )

            }
        </List>
    )
};
/**
 * {
 *   "id": 2,
 *   "name": "Ervin Howell",
 *   "username": "Antonette",
 *   "email": "Shanna@melissa.tv",
 *   "address": {
 *     "street": "Victor Plains",
 *     "suite": "Suite 879",
 *     "city": "Wisokyburgh",
 *     "zipcode": "90566-7771",
 *     "geo": {
 *       "lat": "-43.9509",
 *       "lng": "-34.4618"
 *     }
 *   },
 *   "phone": "010-692-6593 x09125",
 *   "website": "anastasia.net",
 *   "company": {
 *     "name": "Deckow-Crist",
 *     "catchPhrase": "Proactive didactic contingency",
 *     "bs": "synergize scalable supply-chains"
 *   }
 * }
 */