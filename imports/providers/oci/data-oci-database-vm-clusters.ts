// https://www.terraform.io/docs/providers/oci/r/data_oci_database_vm_clusters.html
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
        "optional": true
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
      "vm_clusters": {
        "type": [
          "list",
          [
            "object",
            {
              "compartment_id": "string",
              "cpu_core_count": "number",
              "cpus_enabled": "number",
              "data_storage_size_in_tbs": "number",
              "db_node_storage_size_in_gbs": "number",
              "defined_tags": [
                "map",
                "string"
              ],
              "display_name": "string",
              "exadata_infrastructure_id": "string",
              "freeform_tags": [
                "map",
                "string"
              ],
              "gi_version": "string",
              "id": "string",
              "is_local_backup_enabled": "bool",
              "is_sparse_diskgroup_enabled": "bool",
              "last_patch_history_entry_id": "string",
              "license_model": "string",
              "lifecycle_details": "string",
              "memory_size_in_gbs": "number",
              "shape": "string",
              "ssh_public_keys": [
                "list",
                "string"
              ],
              "state": "string",
              "time_created": "string",
              "time_zone": "string",
              "vm_cluster_network_id": "string"
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

export interface DataOciDatabaseVmClustersConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly displayName?: string;
  readonly exadataInfrastructureId?: string;
  readonly state?: string;
  /** filter block */
  readonly filter?: DataOciDatabaseVmClustersFilter[];
}
export class DataOciDatabaseVmClustersVmClusters extends ComplexComputedList {

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // cpu_core_count - computed: true, optional: false, required: true
  public get cpuCoreCount() {
    return this.getNumberAttribute('cpu_core_count');
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

  // exadata_infrastructure_id - computed: true, optional: false, required: true
  public get exadataInfrastructureId() {
    return this.getStringAttribute('exadata_infrastructure_id');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public get freeformTags() {
    return 'not implemented' as any;
  }

  // gi_version - computed: true, optional: false, required: true
  public get giVersion() {
    return this.getStringAttribute('gi_version');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_local_backup_enabled - computed: true, optional: false, required: true
  public get isLocalBackupEnabled() {
    return this.getBooleanAttribute('is_local_backup_enabled');
  }

  // is_sparse_diskgroup_enabled - computed: true, optional: false, required: true
  public get isSparseDiskgroupEnabled() {
    return this.getBooleanAttribute('is_sparse_diskgroup_enabled');
  }

  // last_patch_history_entry_id - computed: true, optional: false, required: true
  public get lastPatchHistoryEntryId() {
    return this.getStringAttribute('last_patch_history_entry_id');
  }

  // license_model - computed: true, optional: false, required: true
  public get licenseModel() {
    return this.getStringAttribute('license_model');
  }

  // lifecycle_details - computed: true, optional: false, required: true
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // memory_size_in_gbs - computed: true, optional: false, required: true
  public get memorySizeInGbs() {
    return this.getNumberAttribute('memory_size_in_gbs');
  }

  // shape - computed: true, optional: false, required: true
  public get shape() {
    return this.getStringAttribute('shape');
  }

  // ssh_public_keys - computed: true, optional: false, required: true
  public get sshPublicKeys() {
    return this.getListAttribute('ssh_public_keys');
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

  // vm_cluster_network_id - computed: true, optional: false, required: true
  public get vmClusterNetworkId() {
    return this.getStringAttribute('vm_cluster_network_id');
  }
}
export interface DataOciDatabaseVmClustersFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciDatabaseVmClusters extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDatabaseVmClustersConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_vm_clusters',
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

  // exadata_infrastructure_id - computed: false, optional: true, required: false
  private _exadataInfrastructureId?: string;
  public get exadataInfrastructureId() {
    return this._exadataInfrastructureId;
  }
  public set exadataInfrastructureId(value: string | undefined) {
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

  // vm_clusters - computed: true, optional: false, required: true
  public vmClusters(index: string) {
    return new DataOciDatabaseVmClustersVmClusters(this, 'vm_clusters', index);
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciDatabaseVmClustersFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciDatabaseVmClustersFilter[] | undefined) {
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
