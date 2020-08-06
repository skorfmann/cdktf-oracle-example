// https://www.terraform.io/docs/providers/oci/r/data_oci_database_vm_cluster_network.html
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
      "display_name": {
        "type": "string",
        "computed": true
      },
      "dns": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      },
      "exadata_infrastructure_id": {
        "type": "string",
        "required": true
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
      "lifecycle_details": {
        "type": "string",
        "computed": true
      },
      "ntp": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      },
      "scans": {
        "type": [
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
      "validate_vm_cluster_network": {
        "type": "bool",
        "computed": true
      },
      "vm_cluster_id": {
        "type": "string",
        "computed": true
      },
      "vm_cluster_network_id": {
        "type": "string",
        "required": true
      },
      "vm_networks": {
        "type": [
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

export interface DataOciDatabaseVmClusterNetworkConfig extends TerraformMetaArguments {
  readonly exadataInfrastructureId: string;
  readonly vmClusterNetworkId: string;
}
export class DataOciDatabaseVmClusterNetworkScans extends ComplexComputedList {

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
export class DataOciDatabaseVmClusterNetworkVmNetworksNodes extends ComplexComputedList {

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
export class DataOciDatabaseVmClusterNetworkVmNetworks extends ComplexComputedList {

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

// Resource

export class DataOciDatabaseVmClusterNetwork extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDatabaseVmClusterNetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_vm_cluster_network',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._exadataInfrastructureId = config.exadataInfrastructureId;
    this._vmClusterNetworkId = config.vmClusterNetworkId;
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

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // dns - computed: true, optional: false, required: true
  public get dns() {
    return this.getListAttribute('dns');
  }

  // exadata_infrastructure_id - computed: false, optional: false, required: true
  private _exadataInfrastructureId: string;
  public get exadataInfrastructureId() {
    return this._exadataInfrastructureId;
  }
  public set exadataInfrastructureId(value: string) {
    this._exadataInfrastructureId = value;
  }

  // freeform_tags - computed: true, optional: false, required: true
  public freeformTags(key: string): string {
    return new StringMap(this, 'freeform_tags').lookup(key);
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
  public scans(index: string) {
    return new DataOciDatabaseVmClusterNetworkScans(this, 'scans', index);
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

  // vm_cluster_network_id - computed: false, optional: false, required: true
  private _vmClusterNetworkId: string;
  public get vmClusterNetworkId() {
    return this._vmClusterNetworkId;
  }
  public set vmClusterNetworkId(value: string) {
    this._vmClusterNetworkId = value;
  }

  // vm_networks - computed: true, optional: false, required: true
  public vmNetworks(index: string) {
    return new DataOciDatabaseVmClusterNetworkVmNetworks(this, 'vm_networks', index);
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      exadata_infrastructure_id: this._exadataInfrastructureId,
      vm_cluster_network_id: this._vmClusterNetworkId,
    };
  }
}
