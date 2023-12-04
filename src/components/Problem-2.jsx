import { useState, useEffect } from "react";
import { ModalA, ModalB, ModalC } from "./Modal";
import axios from "axios";

const Problem2 = () => {
  const [onlyEven, setOnlyEven] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [contacts, setContacts] = useState([]);
  const [page, setPage] = useState(1);
  const [show, setShow] = useState(false);
  const [country, setCountry] = useState("");
  const [modal, setModal] = useState("");
  const [modalC, setModalC] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get(
          (country === "United States" &&
            `https://contact.mediusware.com/api/country-contacts/${country}/`) ||
            "https://contact.mediusware.com/api/contacts/"
        );

        if (onlyEven) {
          setContacts(contacts.filter((contact) => contact.id % 2 === 0));
        } else {
          setContacts(response.data.results);
        }

        if (searchTerm) {
          const searchedContacts = contacts.filter((contact) =>
            contact.country.name
              .toLowerCase()
              .includes(searchTerm.toLowerCase())
          );
          setContacts(searchedContacts);
        }
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };

    fetchContacts();
  }, [searchTerm, page, country, onlyEven, searchTerm]);

  const handleSearch = (e) => {
    // Update searchTerm state on input change
    // Implement a delay or debounce for API requests
  };

  const handleKeyPress = (e) => {
    // Trigger API request on Enter key press
  };

  const handleScroll = (e) => {
    // Implement infinite scroll to load the next page of contacts
  };

  console.log(country, modal, searchTerm);

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <button
            className="btn btn-lg btn-outline-primary"
            type="button"
            onClick={() => {
              setShow(true);
              setModal("Modal A");
            }}
          >
            All Contacts
          </button>
          <button
            className="btn btn-lg btn-outline-warning"
            type="button"
            onClick={() => {
              setCountry("United States");
              setShow(true);
              setModal("Modal B");
            }}
          >
            US Contacts
          </button>
        </div>

        {modal === "Modal A" && (
          <ModalA
            show={show}
            setShow={setShow}
            contacts={contacts}
            setCountry={setCountry}
            setModal={setModal}
            setModalC={setModalC}
            modalC={modalC}
            setOnlyEven={setOnlyEven}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        )}

        {modal === "Modal B" && (
          <ModalB
            show={show}
            setShow={setShow}
            contacts={contacts}
            setCountry={setCountry}
            setModal={setModal}
            setModalC={setModalC}
            modalC={modalC}
            setOnlyEven={setOnlyEven}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        )}

        {modalC !== null && (
          <ModalC contacts={contacts} setModalC={setModalC} modalC={modalC} />
        )}
      </div>
    </div>
  );
};

export default Problem2;
