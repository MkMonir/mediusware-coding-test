import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";

export function ModalA({
  show,
  setShow,
  contacts,
  setCountry,
  setModal,
  setModalC,
  modalC,
  setOnlyEven,
  setSearchTerm,
}) {
  const handleClose = () => {
    setShow(false);
    setCountry("");
    setOnlyEven(false);
    setSearchTerm("");
  };

  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };

  const handleSearchDebounced = debounce((searchTerm) => {
    // Fetch contacts based on the debounced search term
    setSearchTerm(searchTerm);
  }, 1500);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;

    // Call the debounced function after a delay
    handleSearchDebounced(searchTerm);
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      style={{ zIndex: `${modalC ? "100" : "1055"}` }}
    >
      <Modal.Header closeButton>
        <Modal.Title>Modal A</Modal.Title>
      </Modal.Header>

      <div
        style={{
          display: "flex",
          gap: "8px",
          justifyContent: "center",
          margin: "20px 0",
        }}
      >
        <button
          className="btn"
          style={{ backgroundColor: "#46139f", color: "#fff" }}
          onClick={() => {
            setCountry("all");
            setModal("Modal A");
            setSearchTerm("");
          }}
        >
          All Contacts
        </button>
        <button
          className="btn"
          style={{ backgroundColor: "#ff7f50", color: "#fff" }}
          onClick={() => {
            setCountry("United States");
            setModal("Modal B");
            setSearchTerm("");
          }}
        >
          US Contacts
        </button>
        <button
          className="btn"
          style={{ backgroundColor: "#46139f", color: "#fff" }}
          onClick={handleClose}
        >
          Close
        </button>
      </div>

      <div style={{ margin: "10px 30px" }}>
        <Form.Control
          type="text"
          id="country"
          placeholder="Search country"
          onChange={handleSearch}
        />
      </div>

      <Modal.Body style={{ maxHeight: "280px", overflowY: "scroll" }}>
        <div>
          <Table responsive="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Phone Number</th>
                <th>Country Name</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, i) => (
                <tr
                  key={contact.id}
                  onClick={() => {
                    setModalC(contact.id);
                  }}
                >
                  <td>{contact.id}</td>
                  <td>{contact.phone}</td>
                  <td>{contact.country.name}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Form.Check
          type={"checkbox"}
          id={`Only even`}
          label={`Only even`}
          onChange={() => setOnlyEven((prev) => !prev)}
        />
      </Modal.Footer>
    </Modal>
  );
}

export function ModalB({
  show,
  setShow,
  contacts,
  setCountry,
  setModal,
  setModalC,
  modalC,
  setOnlyEven,
  setSearchTerm,
}) {
  const handleClose = () => {
    setShow(false);
    setCountry("");
    setOnlyEven(false);
    setSearchTerm("");
  };

  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };

  const handleSearchDebounced = debounce((searchTerm) => {
    // Fetch contacts based on the debounced search term
    setSearchTerm(searchTerm);
  }, 1500);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;

    // Call the debounced function after a delay
    handleSearchDebounced(searchTerm);
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      style={{ zIndex: `${modalC ? "100" : "1055"}` }}
    >
      <Modal.Header closeButton>
        <Modal.Title>Modal B</Modal.Title>
      </Modal.Header>

      <div
        style={{
          display: "flex",
          gap: "8px",
          justifyContent: "center",
          margin: "20px 0",
        }}
      >
        <button
          className="btn"
          style={{ backgroundColor: "#46139f", color: "#fff" }}
          onClick={() => {
            setCountry("all");
            setModal("Modal A");
            setSearchTerm("");
          }}
        >
          All Contacts
        </button>
        <button
          className="btn"
          style={{ backgroundColor: "#ff7f50", color: "#fff" }}
          onClick={() => {
            setCountry("United States");
            setModal("Modal B");
            setSearchTerm("");
          }}
        >
          US Contacts
        </button>
        <button
          className="btn"
          style={{ backgroundColor: "#46139f", color: "#fff" }}
          onClick={handleClose}
        >
          Close
        </button>
      </div>

      <div style={{ margin: "10px 30px" }}>
        <Form.Control
          type="text"
          id="country"
          placeholder="Search country"
          onChange={handleSearch}
        />
      </div>

      <Modal.Body style={{ maxHeight: "280px", overflowY: "scroll" }}>
        <div>
          <Table responsive="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Phone Number</th>
                <th>Country Name</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, i) => (
                <tr
                  key={contact.id}
                  onClick={() => {
                    setModalC(contact.id);
                  }}
                >
                  <td>{contact.id}</td>
                  <td>{contact.phone}</td>
                  <td>{contact.country.name}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Form.Check
          type={"checkbox"}
          id={`Only even`}
          label={`Only even`}
          onChange={() => setOnlyEven((prev) => !prev)}
        />
      </Modal.Footer>
    </Modal>
  );
}

export function ModalC({ contacts, modalC, setModalC }) {
  const handleClose = () => {
    setModalC(null);
  };

  return (
    <Modal
      show={modalC !== null && true}
      onHide={handleClose}
      style={{ zIndex: "1200" }}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Modal C</Modal.Title>
      </Modal.Header>

      <Modal.Body style={{ maxHeight: "120px", zIndex: "1200" }}>
        <div>
          <Table responsive="sm">
            <tbody>
              {contacts
                .filter((conatct) => conatct.id === modalC)
                .map((contact, i) => (
                  <tr key={contact.id}>
                    <td>{contact.id}</td>
                    <td>{contact.phone}</td>
                    <td>{contact.country.name}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      </Modal.Body>
    </Modal>
  );
}
