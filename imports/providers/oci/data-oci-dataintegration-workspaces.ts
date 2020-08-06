// https://www.terraform.io/docs/providers/oci/r/data_oci_dataintegration_workspaces.html
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
      "name": {
        "type": "string",
        "optional": true
      },
      "state": {
        "type": "string",
        "optional": true
      },
      "workspaces": {
        "type": [
          "list",
          [
            "object",
            {
              "compartment_id": "string",
              "defined_tags": [
                "map",
                "string"
              ],
              "description": "string",
              "display_name": "string",
              "dns_server_ip": "string",
              "dns_server_zone": "string",
              "freeform_tags": [
                "map",
                "string"
              ],
              "id": "string",
              "is_force_operation": "bool",
              "is_private_network_enabled": "bool",
              "quiesce_timeout": "number",
              "state": "string",
              "state_message": "string",
              "subnet_id": "string",
              "time_created": "string",
              "time_updated": "string",
              "vcn_id": "string"
            }
          ]
        ],
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

export interface DataOciDataintegrationWorkspacesConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly name?: string;
  readonly state?: string;
  /** filter block */
  readonly filter?: DataOciDataintegrationWorkspacesFilter[];
}
export class DataOciDataintegrationWorkspacesWorkspaces extends ComplexComputedList {

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: true
  public get definedTags() {
    return 'not implemented' as any;
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // dns_server_ip - computed: true, optional: false, required: true
  public get dnsServerIp() {
    return this.getStringAttribute('dns_server_ip');
  }

  // dns_server_zone - computed: true, optional: false, required: true
  public get dnsServerZone() {
    return this.getStringAttribute('dns_server_zone');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public get freeformTags() {
    return 'not implemented' as any;
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_force_operation - computed: true, optional: false, required: true
  public get isForceOperation() {
    return this.getBooleanAttribute('is_force_operation');
  }

  // is_private_network_enabled - computed: true, optional: false, required: true
  public get isPrivateNetworkEnabled() {
    return this.getBooleanAttribute('is_private_network_enabled');
  }

  // quiesce_timeout - computed: true, optional: false, required: true
  public get quiesceTimeout() {
    return this.getNumberAttribute('quiesce_timeout');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_message - computed: true, optional: false, required: true
  public get stateMessage() {
    return this.getStringAttribute('state_message');
  }

  // subnet_id - computed: true, optional: false, required: true
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: true
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // vcn_id - computed: true, optional: false, required: true
  public get vcnId() {
    return this.getStringAttribute('vcn_id');
  }
}
export interface DataOciDataintegrationWorkspacesFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciDataintegrationWorkspaces extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDataintegrationWorkspacesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_dataintegration_workspaces',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._name = config.name;
    this._state = config.state;
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

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name;
  }
  public set name(value: string | undefined) {
    this._name = value;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string;
  public get state() {
    return this._state;
  }
  public set state(value: string | undefined) {
    this._state = value;
  }

  // workspaces - computed: true, optional: false, required: true
  public workspaces(index: string) {
    return new DataOciDataintegrationWorkspacesWorkspaces(this, 'workspaces', index);
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciDataintegrationWorkspacesFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciDataintegrationWorkspacesFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      name: this._name,
      state: this._state,
      filter: this._filter,
    };
  }
}
