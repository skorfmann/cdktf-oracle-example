// https://www.terraform.io/docs/providers/oci/r/data_oci_identity_network_sources.html
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
      "network_sources": {
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
              "freeform_tags": [
                "map",
                "string"
              ],
              "id": "string",
              "inactive_state": "string",
              "name": "string",
              "public_source_list": [
                "list",
                "string"
              ],
              "services": [
                "list",
                "string"
              ],
              "state": "string",
              "time_created": "string",
              "virtual_source_list": [
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
              ]
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

export interface DataOciIdentityNetworkSourcesConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  /** filter block */
  readonly filter?: DataOciIdentityNetworkSourcesFilter[];
}
export class DataOciIdentityNetworkSourcesNetworkSourcesVirtualSourceList extends ComplexComputedList {

  // ip_ranges - computed: true, optional: false, required: true
  public get ipRanges() {
    return this.getListAttribute('ip_ranges');
  }

  // vcn_id - computed: true, optional: false, required: true
  public get vcnId() {
    return this.getStringAttribute('vcn_id');
  }
}
export class DataOciIdentityNetworkSourcesNetworkSources extends ComplexComputedList {

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

  // freeform_tags - computed: true, optional: false, required: true
  public get freeformTags() {
    return 'not implemented' as any;
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
  public get virtualSourceList() {
    return 'not implemented' as any;
  }
}
export interface DataOciIdentityNetworkSourcesFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciIdentityNetworkSources extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciIdentityNetworkSourcesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_identity_network_sources',
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

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // network_sources - computed: true, optional: false, required: true
  public networkSources(index: string) {
    return new DataOciIdentityNetworkSourcesNetworkSources(this, 'network_sources', index);
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciIdentityNetworkSourcesFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciIdentityNetworkSourcesFilter[] | undefined) {
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
