// https://www.terraform.io/docs/providers/oci/r/data_oci_identity_network_source.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "compartment_id": {
        "type": "string",
        "computed": true
      },
      "defined_tags": {
        "type": [
          "map",
          "string"
        ],
        "computed": true
      },
      "description": {
        "type": "string",
        "computed": true
      },
      "freeform_tags": {
        "type": [
          "map",
          "string"
        ],
        "computed": true
      },
      "id": {
        "type": "string",
        "computed": true
      },
      "inactive_state": {
        "type": "string",
        "computed": true
      },
      "name": {
        "type": "string",
        "computed": true
      },
      "network_source_id": {
        "type": "string",
        "required": true
      },
      "public_source_list": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      },
      "services": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      },
      "virtual_source_list": {
        "type": [
          "list",
          [
            "object",
            {
              "ip_ranges": [
                "list",
                "string"
              ],
              "vcn_id": "string"
            }
          ]
        ],
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { StringMap } from "cdktf";
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataOciIdentityNetworkSourceConfig extends TerraformMetaArguments {
  readonly networkSourceId: string;
}
export class DataOciIdentityNetworkSourceVirtualSourceList extends ComplexComputedList {

  // ip_ranges - computed: true, optional: false, required: true
  public get ipRanges() {
    return this.getListAttribute('ip_ranges');
  }

  // vcn_id - computed: true, optional: false, required: true
  public get vcnId() {
    return this.getStringAttribute('vcn_id');
  }
}

// Resource

export class DataOciIdentityNetworkSource extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciIdentityNetworkSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_identity_network_source',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._networkSourceId = config.networkSourceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: true
  public definedTags(key: string): string {
    return new StringMap(this, 'defined_tags').lookup(key);
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public freeformTags(key: string): string {
    return new StringMap(this, 'freeform_tags').lookup(key);
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // inactive_state - computed: true, optional: false, required: true
  public get inactiveState() {
    return this.getStringAttribute('inactive_state');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // network_source_id - computed: false, optional: false, required: true
  private _networkSourceId: string;
  public get networkSourceId() {
    return this._networkSourceId;
  }
  public set networkSourceId(value: string) {
    this._networkSourceId = value;
  }

  // public_source_list - computed: true, optional: false, required: true
  public get publicSourceList() {
    return this.getListAttribute('public_source_list');
  }

  // services - computed: true, optional: false, required: true
  public get services() {
    return this.getListAttribute('services');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // virtual_source_list - computed: true, optional: false, required: true
  public virtualSourceList(index: string) {
    return new DataOciIdentityNetworkSourceVirtualSourceList(this, 'virtual_source_list', index);
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      network_source_id: this._networkSourceId,
    };
  }
}
