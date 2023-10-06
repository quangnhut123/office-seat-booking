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
      let seatContainer = $("<div>", { class: "seat-container" }); // New div to hold both image and ID
      let seatImg = $("<img>", {
        src: "images/seat.png",
        alt: "Seat",
        class: "img-fluid seat mb-2 smaller-seat",
        "data-seat-id": seatId,
      });
      let seatLabel = $("<span>", { class: "seat-label", text: seatId++ }); // New span for seat ID

      seatContainer.append(seatLabel); // Append seat ID span to container
      seatContainer.append(seatImg); // Append seat image to container
      columnDiv.append(seatContainer); // Append container to column
    }

    seatContainer.append(columnDiv);
  }

  // ------------------ Seat Click Handling ------------------

  $(".seat").click(function () {
    const seatId = $(this).data("seat-id");
    $(this).toggleClass("selected");

    const status = $(this).hasClass("selected") ? "booked" : "cancelled";

    // Set the form values
    $("#seatId").val(seatId);
    $("#status").val(status);

    // Submit the form
    $("#seatForm").submit();
  });

  //   $(".seat").click(function () {
  //     const seatId = $(this).data("seat-id");
  //     $(this).toggleClass("selected");

  //     const status = $(this).hasClass("selected") ? "booked" : "cancelled";

  //     // POST request to Google Apps Script
  //     $.ajax({
  //       method: "POST",
  //       url: "",
  //       contentType: "application/json",
  //       data: JSON.stringify({ seatId: seatId, status: status }),
  //       dataType: "json",
  //       success: function (response) {
  //         alert(response);
  //         console.log(response); // Handle success response
  //       },
  //       error: function (err) {
  //         console.log(err); // Handle error response
  //       },
  //     });
  //   });
});
