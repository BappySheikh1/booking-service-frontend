const BookingImformation = ({
  service,
  newDate,
  endTime,
  startTime,
}: {
  service: any;
  newDate: string;
  endTime: string;
  startTime: string;
}) => {
  return (
    <div
      style={{
        height: "22rem",
      }}
    >
      date: {newDate}
      <br />
      startTime: {startTime}
      <br />
      endTime: {endTime}
      <br />
      serviceId: {service?.title}
    </div>
  );
};

export default BookingImformation;
