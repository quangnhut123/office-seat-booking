$(document).ready(function () {
  // ------------------ Dynamic Seat Generation ------------------

  // Define number of rows and columns
  const rows = 18; // this translates to columns in our layout
  const seatsPerRow = 6;

  const seatContainer = $("#seatContainer");

  let seatId = 1; // To track unique seat IDs

  for (let i = 0; i < rows; i++) {
    let columnDiv = $("<div>", { class: "col-md-2 mb-3" });

    for (let j = 0; j < seatsPerRow; j++) {
      let seatImg = $("<img>", {
        src: "images/seat.png",
        alt: "Seat",
        class: "img-fluid seat mb-2 smaller-seat",
        title: "Seat ID: " + seatId, // This will be the content of the tooltip
        "data-seat-id": seatId++,
      });

      columnDiv.append(seatImg);
    }

    seatContainer.append(columnDiv);
  }

  $(".seat").tooltip(); // Initialize bootstrap tooltip

  // ------------------ Seat Click Handling ------------------

  // Sample click event handler for seats
  $(".seat").click(function () {
    const seatId = $(this).data("seat-id");

    // Call to backend API or other actions here
    // For demonstration, we'll just alert the seat ID
    alert("Seat ID: " + seatId + " clicked!");

    // Make an API call using jQuery
    // $.post("/api/seat", { id: seatId }, function(response) {
    //     // Handle response here
    // });
  });
});
