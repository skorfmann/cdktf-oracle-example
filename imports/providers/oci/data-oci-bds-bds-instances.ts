// https://www.terraform.io/docs/providers/oci/r/data_oci_bds_bds_instances.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "bds_instances": {
        "type": [
          "list",
          [
            "object",
            {
              "cloud_sql_details": [
                "list",
                [
                  "object",
                  {
                    "block_volume_size_in_gbs": "string",
                    "ip_address": "string",
                    "is_kerberos_mapped_to_database_users": "bool",
                    "kerberos_details": [
                      "list",
                      [
                        "object",
                        {
                          "keytab_file": "string",
                          "principal_name": "string"
                        }
                      ]
                    ],
                    "shape": "string"
                  }
                ]
              ],
              "cluster_admin_password": "string",
              "cluster_details": [
                "list",
                [
                  "object",
                  {
                    "bd_cell_version": "string",
                    "bda_version": "string",
                    "bdm_version": "string",
                    "bds_version": "string",
                    "big_data_manager_url": "string",
                    "cloudera_manager_url": "string",
                    "csql_cell_version": "string",
                    "db_version": "string",
                    "hue_server_url": "string",
                    "os_version": "string",
                    "time_created": "string",
                    "time_refreshed": "string"
                  }
                ]
              ],
              "cluster_public_key": "string",
              "cluster_version": "string",
              "compartment_id": "string",
              "created_by": "string",
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
              "is_cloud_sql_configured": "bool",
              "is_high_availability": "bool",
              "is_secure": "bool",
              "master_node": [
                "list",
                [
                  "object",
                  {
                    "block_volume_size_in_gbs": "string",
                    "number_of_nodes": "number",
                    "shape": "string",
                    "subnet_id": "string"
                  }
                ]
              ],
              "network_config": [
                "list",
                [
                  "object",
                  {
                    "cidr_block": "string",
                    "is_nat_gateway_required": "bool"
                  }
                ]
              ],
              "nodes": [
                "list",
                [
                  "object",
                  {
                    "attached_block_volumes": [
                      "list",
                      [
                        "object",
                        {
                          "volume_attachment_id": "string",
                          "volume_size_in_gbs": "string"
                        }
                      ]
                    ],
                    "availability_domain": "string",
                    "display_name": "string",
                    "fault_domain": "string",
                    "image_id": "string",
                    "instance_id": "string",
                    "ip_address": "string",
                    "node_type": "string",
                    "shape": "string",
                    "ssh_fingerprint": "string",
                    "state": "string",
                    "subnet_id": "string",
                    "time_created": "string"
                  }
                ]
              ],
              "number_of_nodes": "number",
              "state": "string",
              "time_created": "string",
              "time_updated": "string",
              "util_node": [
                "list",
                [
                  "object",
                  {
                    "block_volume_size_in_gbs": "string",
                    "number_of_nodes": "number",
                    "shape": "string",
                    "subnet_id": "string"
                  }
                ]
              ],
              "worker_node": [
                "list",
                [
                  "object",
                  {
                    "block_volume_size_in_gbs": "string",
                    "number_of_nodes": "number",
                    "shape": "string",
                    "subnet_id": "string"
                  }
                ]
              ]
            }
          ]
        ],
        "computed": true
      },
      "compartment_id": {
        "type": "string",
        "required": true
      },
      "display_name": {
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

export interface DataOciBdsBdsInstancesConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly displayName?: string;
  readonly state?: string;
  /** filter block */
  readonly filter?: DataOciBdsBdsInstancesFilter[];
}
export class DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetails extends ComplexComputedList {

  // keytab_file - computed: true, optional: false, required: true
  public get keytabFile() {
    return this.getStringAttribute('keytab_file');
  }

  // principal_name - computed: true, optional: false, required: true
  public get principalName() {
    return this.getStringAttribute('principal_name');
  }
}
export class DataOciBdsBdsInstancesBdsInstancesCloudSqlDetails extends ComplexComputedList {

  // block_volume_size_in_gbs - computed: true, optional: false, required: true
  public get blockVolumeSizeInGbs() {
    return this.getStringAttribute('block_volume_size_in_gbs');
  }

  // ip_address - computed: true, optional: false, required: true
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // is_kerberos_mapped_to_database_users - computed: true, optional: false, required: true
  public get isKerberosMappedToDatabaseUsers() {
    return this.getBooleanAttribute('is_kerberos_mapped_to_database_users');
  }

  // kerberos_details - computed: true, optional: false, required: true
  public get kerberosDetails() {
    return 'not implemented' as any;
  }

  // shape - computed: true, optional: false, required: true
  public get shape() {
    return this.getStringAttribute('shape');
  }
}
export class DataOciBdsBdsInstancesBdsInstancesClusterDetails extends ComplexComputedList {

  // bd_cell_version - computed: true, optional: false, required: true
  public get bdCellVersion() {
    return this.getStringAttribute('bd_cell_version');
  }

  // bda_version - computed: true, optional: false, required: true
  public get bdaVersion() {
    return this.getStringAttribute('bda_version');
  }

  // bdm_version - computed: true, optional: false, required: true
  public get bdmVersion() {
    return this.getStringAttribute('bdm_version');
  }

  // bds_version - computed: true, optional: false, required: true
  public get bdsVersion() {
    return this.getStringAttribute('bds_version');
  }

  // big_data_manager_url - computed: true, optional: false, required: true
  public get bigDataManagerUrl() {
    return this.getStringAttribute('big_data_manager_url');
  }

  // cloudera_manager_url - computed: true, optional: false, required: true
  public get clouderaManagerUrl() {
    return this.getStringAttribute('cloudera_manager_url');
  }

  // csql_cell_version - computed: true, optional: false, required: true
  public get csqlCellVersion() {
    return this.getStringAttribute('csql_cell_version');
  }

  // db_version - computed: true, optional: false, required: true
  public get dbVersion() {
    return this.getStringAttribute('db_version');
  }

  // hue_server_url - computed: true, optional: false, required: true
  public get hueServerUrl() {
    return this.getStringAttribute('hue_server_url');
  }

  // os_version - computed: true, optional: false, required: true
  public get osVersion() {
    return this.getStringAttribute('os_version');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_refreshed - computed: true, optional: false, required: true
  public get timeRefreshed() {
    return this.getStringAttribute('time_refreshed');
  }
}
export class DataOciBdsBdsInstancesBdsInstancesMasterNode extends ComplexComputedList {

  // block_volume_size_in_gbs - computed: true, optional: false, required: true
  public get blockVolumeSizeInGbs() {
    return this.getStringAttribute('block_volume_size_in_gbs');
  }

  // number_of_nodes - computed: true, optional: false, required: true
  public get numberOfNodes() {
    return this.getNumberAttribute('number_of_nodes');
  }

  // shape - computed: true, optional: false, required: true
  public get shape() {
    return this.getStringAttribute('shape');
  }

  // subnet_id - computed: true, optional: false, required: true
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}
export class DataOciBdsBdsInstancesBdsInstancesNetworkConfig extends ComplexComputedList {

  // cidr_block - computed: true, optional: false, required: true
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }

  // is_nat_gateway_required - computed: true, optional: false, required: true
  public get isNatGatewayRequired() {
    return this.getBooleanAttribute('is_nat_gateway_required');
  }
}
export class DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumes extends ComplexComputedList {

  // volume_attachment_id - computed: true, optional: false, required: true
  public get volumeAttachmentId() {
    return this.getStringAttribute('volume_attachment_id');
  }

  // volume_size_in_gbs - computed: true, optional: false, required: true
  public get volumeSizeInGbs() {
    return this.getStringAttribute('volume_size_in_gbs');
  }
}
export class DataOciBdsBdsInstancesBdsInstancesNodes extends ComplexComputedList {

  // attached_block_volumes - computed: true, optional: false, required: true
  public get attachedBlockVolumes() {
    return 'not implemented' as any;
  }

  // availability_domain - computed: true, optional: false, required: true
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // fault_domain - computed: true, optional: false, required: true
  public get faultDomain() {
    return this.getStringAttribute('fault_domain');
  }

  // image_id - computed: true, optional: false, required: true
  public get imageId() {
    return this.getStringAttribute('image_id');
  }

  // instance_id - computed: true, optional: false, required: true
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // ip_address - computed: true, optional: false, required: true
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // node_type - computed: true, optional: false, required: true
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }

  // shape - computed: true, optional: false, required: true
  public get shape() {
    return this.getStringAttribute('shape');
  }

  // ssh_fingerprint - computed: true, optional: false, required: true
  public get sshFingerprint() {
    return this.getStringAttribute('ssh_fingerprint');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // subnet_id - computed: true, optional: false, required: true
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }
}
export class DataOciBdsBdsInstancesBdsInstancesUtilNode extends ComplexComputedList {

  // block_volume_size_in_gbs - computed: true, optional: false, required: true
  public get blockVolumeSizeInGbs() {
    return this.getStringAttribute('block_volume_size_in_gbs');
  }

  // number_of_nodes - computed: true, optional: false, required: true
  public get numberOfNodes() {
    return this.getNumberAttribute('number_of_nodes');
  }

  // shape - computed: true, optional: false, required: true
  public get shape() {
    return this.getStringAttribute('shape');
  }

  // subnet_id - computed: true, optional: false, required: true
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}
export class DataOciBdsBdsInstancesBdsInstancesWorkerNode extends ComplexComputedList {

  // block_volume_size_in_gbs - computed: true, optional: false, required: true
  public get blockVolumeSizeInGbs() {
    return this.getStringAttribute('block_volume_size_in_gbs');
  }

  // number_of_nodes - computed: true, optional: false, required: true
  public get numberOfNodes() {
    return this.getNumberAttribute('number_of_nodes');
  }

  // shape - computed: true, optional: false, required: true
  public get shape() {
    return this.getStringAttribute('shape');
  }

  // subnet_id - computed: true, optional: false, required: true
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}
export class DataOciBdsBdsInstancesBdsInstances extends ComplexComputedList {

  // cloud_sql_details - computed: true, optional: false, required: true
  public get cloudSqlDetails() {
    return 'not implemented' as any;
  }

  // cluster_admin_password - computed: true, optional: false, required: true
  public get clusterAdminPassword() {
    return this.getStringAttribute('cluster_admin_password');
  }

  // cluster_details - computed: true, optional: false, required: true
  public get clusterDetails() {
    return 'not implemented' as any;
  }

  // cluster_public_key - computed: true, optional: false, required: true
  public get clusterPublicKey() {
    return this.getStringAttribute('cluster_public_key');
  }

  // cluster_version - computed: true, optional: false, required: true
  public get clusterVersion() {
    return this.getStringAttribute('cluster_version');
  }

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // created_by - computed: true, optional: false, required: true
  public get createdBy() {
    return this.getStringAttribute('created_by');
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

  // is_cloud_sql_configured - computed: true, optional: false, required: true
  public get isCloudSqlConfigured() {
    return this.getBooleanAttribute('is_cloud_sql_configured');
  }

  // is_high_availability - computed: true, optional: false, required: true
  public get isHighAvailability() {
    return this.getBooleanAttribute('is_high_availability');
  }

  // is_secure - computed: true, optional: false, required: true
  public get isSecure() {
    return this.getBooleanAttribute('is_secure');
  }

  // master_node - computed: true, optional: false, required: true
  public get masterNode() {
    return 'not implemented' as any;
  }

  // network_config - computed: true, optional: false, required: true
  public get networkConfig() {
    return 'not implemented' as any;
  }

  // nodes - computed: true, optional: false, required: true
  public get nodes() {
    return 'not implemented' as any;
  }

  // number_of_nodes - computed: true, optional: false, required: true
  public get numberOfNodes() {
    return this.getNumberAttribute('number_of_nodes');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: true
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // util_node - computed: true, optional: false, required: true
  public get utilNode() {
    return 'not implemented' as any;
  }

  // worker_node - computed: true, optional: false, required: true
  public get workerNode() {
    return 'not implemented' as any;
  }
}
export interface DataOciBdsBdsInstancesFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciBdsBdsInstances extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciBdsBdsInstancesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_bds_bds_instances',
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

  // bds_instances - computed: true, optional: false, required: true
  public bdsInstances(index: string) {
    return new DataOciBdsBdsInstancesBdsInstances(this, 'bds_instances', index);
  }

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
  private _filter?: DataOciBdsBdsInstancesFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciBdsBdsInstancesFilter[] | undefined) {
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
