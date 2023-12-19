import {Row, TableHeader, TableView} from "@adobe/react-spectrum";
import {Cell, Column, TableBody} from "react-stately";

export default function Table(props) {
    const list = props.list;
    return (
        <TableView
            aria-label="TableView with controlled, resizable columns saved in local storage"
            maxWidth={320}
            height={200}>
            <TableHeader>
                <Column>Name</Column>
            </TableHeader>
            <TableBody items={list.items} loadingState={list.loadingState} onLoadMore={list.loadMore}>
                {(item) => <Row key={item.name}><Cell>{item.name}</Cell></Row>}
            </TableBody>
        </TableView>
    );
}
