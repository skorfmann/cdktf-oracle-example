// https://www.terraform.io/docs/providers/oci/r/data_oci_core_fast_connect_provider_services.html
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
      "fast_connect_provider_services": {
        "type": [
          "list",
          [
            "object",
            {
              "bandwith_shape_management": "string",
              "customer_asn_management": "string",
              "description": "string",
              "id": "string",
              "private_peering_bgp_management": "string",
              "provider_name": "string",
              "provider_service_key_management": "string",
              "provider_service_name": "string",
              "public_peering_bgp_management": "string",
              "required_total_cross_connects": "number",
              "supported_virtual_circuit_types": [
                "list",
                "string"
              ],
              "type": "string"
            }
          ]
        ],
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
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

export interface DataOciCoreFastConnectProviderServicesConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  /** filter block */
  readonly filter?: DataOciCoreFastConnectProviderServicesFilter[];
}
export class DataOciCoreFastConnectProviderServicesFastConnectProviderServices extends ComplexComputedList {

  // bandwith_shape_management - computed: true, optional: false, required: true
  public get bandwithShapeManagement() {
    return this.getStringAttribute('bandwith_shape_management');
  }

  // customer_asn_management - computed: true, optional: false, required: true
  public get customerAsnManagement() {
    return this.getStringAttribute('customer_asn_management');
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // private_peering_bgp_management - computed: true, optional: false, required: true
  public get privatePeeringBgpManagement() {
    return this.getStringAttribute('private_peering_bgp_management');
  }

  // provider_name - computed: true, optional: false, required: true
  public get providerName() {
    return this.getStringAttribute('provider_name');
  }

  // provider_service_key_management - computed: true, optional: false, required: true
  public get providerServiceKeyManagement() {
    return this.getStringAttribute('provider_service_key_management');
  }

  // provider_service_name - computed: true, optional: false, required: true
  public get providerServiceName() {
    return this.getStringAttribute('provider_service_name');
  }

  // public_peering_bgp_management - computed: true, optional: false, required: true
  public get publicPeeringBgpManagement() {
    return this.getStringAttribute('public_peering_bgp_management');
  }

  // required_total_cross_connects - computed: true, optional: false, required: true
  public get requiredTotalCrossConnects() {
    return this.getNumberAttribute('required_total_cross_connects');
  }

  // supported_virtual_circuit_types - computed: true, optional: false, required: true
  public get supportedVirtualCircuitTypes() {
    return this.getListAttribute('supported_virtual_circuit_types');
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataOciCoreFastConnectProviderServicesFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciCoreFastConnectProviderServices extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciCoreFastConnectProviderServicesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_fast_connect_provider_services',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
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

  // fast_connect_provider_services - computed: true, optional: false, required: true
  public fastConnectProviderServices(index: string) {
    return new DataOciCoreFastConnectProviderServicesFastConnectProviderServices(this, 'fast_connect_provider_services', index);
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciCoreFastConnectProviderServicesFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciCoreFastConnectProviderServicesFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      filter: this._filter,
    };
  }
}
