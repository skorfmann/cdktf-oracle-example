// https://www.terraform.io/docs/providers/oci/r/data_oci_database_exadata_infrastructures.html
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
      "exadata_infrastructures": {
        "type": [
          "list",
          [
            "object",
            {
              "activation_file": "string",
              "admin_network_cidr": "string",
              "cloud_control_plane_server1": "string",
              "cloud_control_plane_server2": "string",
              "compartment_id": "string",
              "corporate_proxy": "string",
              "cpus_enabled": "number",
              "data_storage_size_in_tbs": "number",
              "db_node_storage_size_in_gbs": "number",
              "defined_tags": [
                "map",
                "string"
              ],
              "display_name": "string",
              "dns_server": [
                "list",
                "string"
              ],
              "freeform_tags": [
                "map",
                "string"
              ],
              "gateway": "string",
              "id": "string",
              "infini_band_network_cidr": "string",
              "lifecycle_details": "string",
              "max_cpu_count": "number",
              "max_data_storage_in_tbs": "number",
              "max_db_node_storage_in_gbs": "number",
              "max_memory_in_gbs": "number",
              "memory_size_in_gbs": "number",
              "netmask": "string",
              "ntp_server": [
                "list",
                "string"
              ],
              "shape": "string",
              "state": "string",
              "time_created": "string",
              "time_zone": "string"
            }
          ]
        ],
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "state": {
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

export interface DataOciDatabaseExadataInfrastructuresConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly displayName?: string;
  readonly state?: string;
  /** filter block */
  readonly filter?: DataOciDatabaseExadataInfrastructuresFilter[];
}
export class DataOciDatabaseExadataInfrastructuresExadataInfrastructures extends ComplexComputedList {

  // activation_file - computed: true, optional: false, required: true
  public get activationFile() {
    return this.getStringAttribute('activation_file');
  }

  // admin_network_cidr - computed: true, optional: false, required: true
  public get adminNetworkCidr() {
    return this.getStringAttribute('admin_network_cidr');
  }

  // cloud_control_plane_server1 - computed: true, optional: false, required: true
  public get cloudControlPlaneServer1() {
    return this.getStringAttribute('cloud_control_plane_server1');
  }

  // cloud_control_plane_server2 - computed: true, optional: false, required: true
  public get cloudControlPlaneServer2() {
    return this.getStringAttribute('cloud_control_plane_server2');
  }

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // corporate_proxy - computed: true, optional: false, required: true
  public get corporateProxy() {
    return this.getStringAttribute('corporate_proxy');
  }

  // cpus_enabled - computed: true, optional: false, required: true
  public get cpusEnabled() {
    return this.getNumberAttribute('cpus_enabled');
  }

  // data_storage_size_in_tbs - computed: true, optional: false, required: true
  public get dataStorageSizeInTbs() {
    return this.getNumberAttribute('data_storage_size_in_tbs');
  }

  // db_node_storage_size_in_gbs - computed: true, optional: false, required: true
  public get dbNodeStorageSizeInGbs() {
    return this.getNumberAttribute('db_node_storage_size_in_gbs');
  }

  // defined_tags - computed: true, optional: false, required: true
  public get definedTags() {
    return 'not implemented' as any;
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // dns_server - computed: true, optional: false, required: true
  public get dnsServer() {
    return this.getListAttribute('dns_server');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public get freeformTags() {
    return 'not implemented' as any;
  }

  // gateway - computed: true, optional: false, required: true
  public get gateway() {
    return this.getStringAttribute('gateway');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // infini_band_network_cidr - computed: true, optional: false, required: true
  public get infiniBandNetworkCidr() {
    return this.getStringAttribute('infini_band_network_cidr');
  }

  // lifecycle_details - computed: true, optional: false, required: true
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // max_cpu_count - computed: true, optional: false, required: true
  public get maxCpuCount() {
    return this.getNumberAttribute('max_cpu_count');
  }

  // max_data_storage_in_tbs - computed: true, optional: false, required: true
  public get maxDataStorageInTbs() {
    return this.getNumberAttribute('max_data_storage_in_tbs');
  }

  // max_db_node_storage_in_gbs - computed: true, optional: false, required: true
  public get maxDbNodeStorageInGbs() {
    return this.getNumberAttribute('max_db_node_storage_in_gbs');
  }

  // max_memory_in_gbs - computed: true, optional: false, required: true
  public get maxMemoryInGbs() {
    return this.getNumberAttribute('max_memory_in_gbs');
  }

  // memory_size_in_gbs - computed: true, optional: false, required: true
  public get memorySizeInGbs() {
    return this.getNumberAttribute('memory_size_in_gbs');
  }

  // netmask - computed: true, optional: false, required: true
  public get netmask() {
    return this.getStringAttribute('netmask');
  }

  // ntp_server - computed: true, optional: false, required: true
  public get ntpServer() {
    return this.getListAttribute('ntp_server');
  }

  // shape - computed: true, optional: false, required: true
  public get shape() {
    return this.getStringAttribute('shape');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_zone - computed: true, optional: false, required: true
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
}
export interface DataOciDatabaseExadataInfrastructuresFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciDatabaseExadataInfrastructures extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDatabaseExadataInfrastructuresConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_exadata_infrastructures',
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

  // exadata_infrastructures - computed: true, optional: false, required: true
  public exadataInfrastructures(index: string) {
    return new DataOciDatabaseExadataInfrastructuresExadataInfrastructures(this, 'exadata_infrastructures', index);
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

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciDatabaseExadataInfrastructuresFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciDatabaseExadataInfrastructuresFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      display_name: this._displayName,
      state: this._state,
      filter: this._filter,
    };
  }
}
