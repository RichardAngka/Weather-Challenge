import useHttpReq from "../../../hooks/useHttpReq";

interface ListPropsType {
  input: string;
}

const List: React.FC<ListPropsType> = ({ input }) => {
  const { data } = useHttpReq({
    path: "http://dev.farizdotid.com/api/daerahindonesia/provinsi",
  });

  const filteredData = data?.provinsi?.filter((el: any) => {
    if (input === "") {
      return el;
    } else {
      return el.nama.toLowerCase().includes(input);
    }
  });
  return (
    <ul>
      {filteredData?.map((item: { id: string; nama: string }) => (
        <li key={item.id}>{item.nama}</li>
      ))}
    </ul>
  );
};

export default List;
