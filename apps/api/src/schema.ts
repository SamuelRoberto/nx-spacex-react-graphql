import { gql } from 'apollo-server';
import axios from 'axios';

export const typeDefs = gql`
  type Dragon {
    id: String!
    name: String
    type: String
    active: Boolean
    crew_capacity: Float
    sidewall_angle_deg: Float
    orbit_duration_yr: Float
    dry_mass_kg: Float
    dry_mass_lb: Float
    first_flight: String
    heat_shield: HeatShield
    thrusters: [Thruster]
    launch_payload_mass: LaunchPayloadMass
    launch_payload_vol: LaunchPayloadVol
    return_payload_mass: ReturnPayloadMass
    return_payload_vol: ReturnPayloadVol
    pressurized_capsule: PressurizedCapsule
    trunk: Trunk
    height_w_trunk: HeightWTrunk
    diameter: Diameter
    wikipedia: String
    description: String
  }

  type HeatShield {
    material: String
    size_meters: Float
    temp_degrees: Float
    dev_partner: String
  }

  type Thrust {
    kN: Float
    lbf: Float
  }

  type Thruster {
    type: String
    amount: Float
    pods: Float
    fuel_1: String
    fuel_2: String
    thrust: Thrust
  }

  type LaunchPayloadMass {
    kg: Float
    lb: Float
  }

  type LaunchPayloadVol {
    cubic_meters: Float
    cubic_feet: Float
  }

  type ReturnPayloadMass {
    kg: Float
    lb: Float
  }

  type ReturnPayloadVol {
    cubic_meters: Float
    cubic_feet: Float
  }

  type PayloadVolume {
    cubic_meters: Float
    cubic_feet: Float
  }

  type PressurizedCapsule {
    payload_volume: PayloadVolume
  }

  type TrunkVolume {
    cubic_meters: Float
    cubic_feet: Float
  }

  type Cargo {
    solar_array: Float
    unpressurized_cargo: Boolean
  }

  type Trunk {
    trunk_volume: TrunkVolume
    cargo: Cargo
  }

  type HeightWTrunk {
    meters: Float
    feet: Float
  }

  type Diameter {
    meters: Float
    feet: Float
  }

  type Query {
    dragons: [Dragon]
  }
`;

export const resolvers = {
  Query: {
    dragons: () => {
      return axios.get('https://api.spacexdata.com/v3/dragons')
        .then(res => res.data);
    },
  },
};

// name
// type
// active
// crew_capacity
// sidewall_angle_deg
// orbit_duration_yr
// dry_mass_kg
// dry_mass_lb
// first_flight
// heat_shield
// thrusters
// launch_payload_mass
// launch_payload_vol
// return_payload_mass
// return_payload_vol
// pressurized_capsule
// trunk
// height_w_trunk
// diameter
// wikipedia
// description
