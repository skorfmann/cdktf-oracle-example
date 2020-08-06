// https://www.terraform.io/docs/providers/oci/r/data_oci_database_vm_cluster_networks.html
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
      "display_name": {
        "type": "string",
        "optional": true
      },
      "exadata_infrastructure_id": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "state": {
        "type": "string",
        "optional": true
      },
      "vm_cluster_networks": {
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
              "display_name": "string",
              "dns": [
                "list",
                "string"
              ],
              "exadata_infrastructure_id": "string",
              "freeform_tags": [
                "map",
                "string"
              ],
              "id": "string",
              "lifecycle_details": "string",
              "ntp": [
                "list",
                "string"
              ],
              "scans": [
                "list",
                [
                  "object",
                  {
                    "hostname": "string",
                    "ips": [
                      "list",
                      "string"
                    ],
                    "port": "number"
                  }
                ]
              ],
              "state": "string",
              "time_created": "string",
              "validate_vm_cluster_network": "bool",
              "vm_cluster_id": "string",
              "vm_networks": [
                "list",
                [
                  "object",
                  {
                    "domain_name": "string",
                    "gateway": "string",
                    "netmask": "string",
                    "network_type": "string",
                    "nodes": [
                      "list",
                      [
                        "object",
                        {
                          "hostname": "string",
                          "ip": "string",
                          "vip": "string",
                          "vip_hostname": "string"
                        }
                      ]
                    ],
                    "vlan_id": "string"
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

export interface DataOciDatabaseVmClusterNetworksConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly displayName?: string;
  readonly exadataInfrastructureId: string;
  readonly state?: string;
  /** filter block */
  readonly filter?: DataOciDatabaseVmClusterNetworksFilter[];
}
export class DataOciDatabaseVmClusterNetworksVmClusterNetworksScans extends ComplexComputedList {

  // hostname - computed: true, optional: false, required: true
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // ips - computed: true, optional: false, required: true
  public get ips() {
    return this.getListAttribute('ips');
  }

  // port - computed: true, optional: false, required: true
  public get port() {
    return this.getNumberAttribute('port');
  }
}
export class DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodes extends ComplexComputedList {

  // hostname - computed: true, optional: false, required: true
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // ip - computed: true, optional: false, required: true
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // vip - computed: true, optional: false, required: true
  public get vip() {
    return this.getStringAttribute('vip');
  }

  // vip_hostname - computed: true, optional: false, required: true
  public get vipHostname() {
    return this.getStringAttribute('vip_hostname');
  }
}
export class DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworks extends ComplexComputedList {

  // domain_name - computed: true, optional: false, required: true
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // gateway - computed: true, optional: false, required: true
  public get gateway() {
    return this.getStringAttribute('gateway');
  }

  // netmask - computed: true, optional: false, required: true
  public get netmask() {
    return this.getStringAttribute('netmask');
  }

  // network_type - computed: true, optional: false, required: true
  public get networkType() {
    return this.getStringAttribute('network_type');
  }

  // nodes - computed: true, optional: false, required: true
  public get nodes() {
    return 'not implemented' as any;
  }

  // vlan_id - computed: true, optional: false, required: true
  public get vlanId() {
    return this.getStringAttribute('vlan_id');
  }
}
export class DataOciDatabaseVmClusterNetworksVmClusterNetworks extends ComplexComputedList {

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

  // dns - computed: true, optional: false, required: true
  public get dns() {
    return this.getListAttribute('dns');
  }

  // exadata_infrastructure_id - computed: true, optional: false, required: true
  public get exadataInfrastructureId() {
    return this.getStringAttribute('exadata_infrastructure_id');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public get freeformTags() {
    return 'not implemented' as any;
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // lifecycle_details - computed: true, optional: false, required: true
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // ntp - computed: true, optional: false, required: true
  public get ntp() {
    return this.getListAttribute('ntp');
  }

  // scans - computed: true, optional: false, required: true
  public get scans() {
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

  // validate_vm_cluster_network - computed: true, optional: false, required: true
  public get validateVmClusterNetwork() {
    return this.getBooleanAttribute('validate_vm_cluster_network');
  }

  // vm_cluster_id - computed: true, optional: false, required: true
  public get vmClusterId() {
    return this.getStringAttribute('vm_cluster_id');
  }

  // vm_networks - computed: true, optional: false, required: true
  public get vmNetworks() {
    return 'not implemented' as any;
  }
}
export interface DataOciDatabaseVmClusterNetworksFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciDatabaseVmClusterNetworks extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDatabaseVmClusterNetworksConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_vm_cluster_networks',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._displayName = config.displayName;
    this._exadataInfrastructureId = config.exadataInfrastructureId;
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

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
  }

  // exadata_infrastructure_id - computed: false, optional: false, required: true
  private _exadataInfrastructureId: string;
  public get exadataInfrastructureId() {
    return this._exadataInfrastructureId;
  }
  public set exadataInfrastructureId(value: string) {
    this._exadataInfrastructureId = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string;
  public get state() {
    return this._state;
  }
  public set state(value: string | undefined) {
    this._state = value;
  }

  // vm_cluster_networks - computed: true, optional: false, required: true
  public vmClusterNetworks(index: string) {
    return new DataOciDatabaseVmClusterNetworksVmClusterNetworks(this, 'vm_cluster_networks', index);
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciDatabaseVmClusterNetworksFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciDatabaseVmClusterNetworksFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      display_name: this._displayName,
      exadata_infrastructure_id: this._exadataInfrastructureId,
      state: this._state,
      filter: this._filter,
    };
  }
}
