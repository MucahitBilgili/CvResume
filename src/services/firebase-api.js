

const [newName, setNewName] = useState("");
const [newAge, setNewAge] = useState(0);

const [users, setUsers] = useState([]);
const usersCollectionRef = collection(db, "users");

const createUser = async () => {
    await addDoc(usersCollectionRef, { name: newName, age: Number(newAge) });
};

const updateUser = async (id, model) => {
    const userDoc = doc(db, "users", id);
    const newFields = { age: model.age  };
    await updateDoc(userDoc, newFields);
};

const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
};


const getUsers = async () => {
    const data = await getDocs(usersCollectionRef);

    data.docs.map((doc) => (console.log(({ ...doc.data() }))));
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

}

export default getUsers();