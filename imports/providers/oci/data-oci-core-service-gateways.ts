// https://www.terraform.io/docs/providers/oci/r/data_oci_core_service_gateways.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "compartment_id": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "service_gateways": {
        "type": [
          "list",
          [
            "object",
            {
              "block_traffic": "bool",
              "compartment_id": "string",
              "defined_tags": [
                "map",
                "string"
              ],
              "display_name": "string",
              "freeform_tags": [
                "map",
                "string"
              ],
              "id": "string",
              "route_table_id": "string",
              "services": [
                "list",
                [
                  "object",
                  {
                    "service_id": "string",
                    "service_name": "string"
                  }
                ]
              ],
              "state": "string",
              "time_created": "string",
              "vcn_id": "string"
            }
          ]
        ],
        "computed": true
      },
      "state": {
        "type": "string",
        "optional": true
      },
      "vcn_id": {
        "type": "string",
        "optional": true
      }
    },
    "block_types": {
      "filter": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "name": {
              "type": "string",
              "required": true
            },
            "regex": {
              "type": "bool",
              "optional": true
            },
            "values": {
              "type": [
                "list",
                "string"
              ],
              "required": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataOciCoreServiceGatewaysConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly state?: string;
  readonly vcnId?: string;
  /** filter block */
  readonly filter?: DataOciCoreServiceGatewaysFilter[];
}
export class DataOciCoreServiceGatewaysServiceGatewaysServices extends ComplexComputedList {

  // service_id - computed: true, optional: false, required: true
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }

  // service_name - computed: true, optional: false, required: true
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
}
export class DataOciCoreServiceGatewaysServiceGateways extends ComplexComputedList {

  // block_traffic - computed: true, optional: false, required: true
  public get blockTraffic() {
    return this.getBooleanAttribute('block_traffic');
  }

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: true
  public get definedTags() {
    return 'not implemented' as any;
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public get freeformTags() {
    return 'not implemented' as any;
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // route_table_id - computed: true, optional: false, required: true
  public get routeTableId() {
    return this.getStringAttribute('route_table_id');
  }

  // services - computed: true, optional: false, required: true
  public get services() {
    return 'not implemented' as any;
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // vcn_id - computed: true, optional: false, required: true
  public get vcnId() {
    return this.getStringAttribute('vcn_id');
  }
}
export interface DataOciCoreServiceGatewaysFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciCoreServiceGateways extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciCoreServiceGatewaysConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_service_gateways',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._state = config.state;
    this._vcnId = config.vcnId;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // service_gateways - computed: true, optional: false, required: true
  public serviceGateways(index: string) {
    return new DataOciCoreServiceGatewaysServiceGateways(this, 'service_gateways', index);
  }

  // state - computed: false, optional: true, required: false
  private _state?: string;
  public get state() {
    return this._state;
  }
  public set state(value: string | undefined) {
    this._state = value;
  }

  // vcn_id - computed: false, optional: true, required: false
  private _vcnId?: string;
  public get vcnId() {
    return this._vcnId;
  }
  public set vcnId(value: string | undefined) {
    this._vcnId = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciCoreServiceGatewaysFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciCoreServiceGatewaysFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      state: this._state,
      vcn_id: this._vcnId,
      filter: this._filter,
    };
  }
}
