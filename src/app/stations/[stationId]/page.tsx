interface StationDetailsProps {
    params: {
      stationId: string;
    };
  }
  
  export default function StationDetails({ params }: StationDetailsProps) {
    console.log(params.stationId); // Access the dynamic route parameter
  
    return (
      <div>
        <h1>Station Details for ID: {params.stationId}</h1>
      </div>
    );
  }
  